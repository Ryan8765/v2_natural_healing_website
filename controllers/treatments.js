const Treatment = require('../models/Treatment');


exports.create =  (req, res, next) => {

	var { name, description, treatmentComponents, precautions, conditionID } = req.body;
	//change name to lowercase when searching for existing treatment as mongodb converts everything to lowercase when saving treatment name.
	name = name.toLowerCase();

	/*
		Handle required fields
	 */
	if( !name ) {
		return res.status(422).send({error: 'Treatment name must be provided!'});
	}

	if ( treatmentComponents.length < 1 ) {
		return res.status(422).send({error: 'Must provide at least one Treatment Component!'});
	}

	if( !conditionID ) {
		return res.status(422).send({error: 'Must provide a related condition.  Refresh and try again.'});
	}


	/*
		Get the total cost of the treatment components
	 */
	//get total treatment cost rounded to two decimal places.
	var treatmentCost = treatmentComponents.reduce((sum, treatmentComponent) => {
		var cost = Number(treatmentComponent.cost);
		return sum + cost;
	}, 0).toFixed(2);
	

	/*
		Save treatment if above is validated
	 */
	 
	/*
		Check to make sure condition doesn't already exist
	 */
	Treatment.findOne({name},(err, existingTreatment) => {
		//if error connecting to database - return error
		if(err) {return res.status(422).json({error: 'Error - Please try again later.'})};

		//If a user with an email does exist, return an error
		if(existingTreatment) {
			console.log( "This ran" );
			return res.status(422).json({error: 'Treatment with that name already exists!  Please use a different treatment name.'});
		}

		const newTreatment = new Treatment({
			name, 
			description,
			treatmentComponents,
			precautions,
			cost: treatmentCost,
			relatedCondition: conditionID
		});

		

		newTreatment.save((err) => {
			//if error connecting to database - return error
			if(err) {return next(err);}
			return res.status(200).json({success: true});
		});
	});



};