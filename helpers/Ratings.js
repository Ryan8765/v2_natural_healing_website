const roundTo = require('round-to');

/*
	Ratings class to take care of any ratings related logic.
 */
class Ratings {

	constructor( ratings ) {
		this.ratings = ratings;
	}

	getNumberRatings() {
		var ratings = this.ratings;
		var length = ratings.length;

		if( ratings ) {
			return length;
		}

		return false;
	}

	getAverage() {
		var ratings = this.ratings;
		var length = ratings.length;

		if( length > 0 ) {
			var ratingsSum = ratings.reduce((sum, ratingRecord) => {
				return sum + ratingRecord.rating;
			}, 0);
			var averageRating = ratingsSum / length;
			averageRating = roundTo(averageRating, 2);

			return averageRating;
		}
		 return false;
	}

}

module.exports = Ratings;