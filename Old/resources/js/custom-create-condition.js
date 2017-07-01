$(document).ready( function() {



	/******************************************************************************
	
		Handle adding treatment items
	
	******************************************************************************/


	//create an html table row with an array of column values passed.
	function create_table_row_html( columnsArray ) {

		//get number of columns in array
		var rowColumnLength = columnsArray.length;
		var html = '<tr>';
		

		for ( i = 0; i < rowColumnLength; i++ ) {

			html += '<td>' + columnsArray[i] + '</td>';

		}//end for

		html += '<td><span title="Remove" class="delete-treatment-item"><i class="fa fa-times-circle" aria-hidden="true"></i></span></td>';
		html += '</tr>';


		return html;

	}//end create_table_row_html


	//get column array values to pass to create_table_row.  Obtain this by passing a class name which holds all values
	function get_table_column_values_array( elements ) {

		var elementsArray = elements.toArray();
		var colValuesArray = [];

		elements.each(function() {
			colValuesArray.push( $(this).val() );
		});

		return colValuesArray;

	}

	//clear all values from inputs - takes an array of input elements to clear values.
	function clear_input_values ( elements ) {
		elements.each(function() {
			$(this).val(""); 
		});
	}

	//delete a row - enter element clicked
	function delete_table_row( elementClicked ) {
		var row = elementClicked.closest("tr");
		row.remove();
	}


	//handle adding a row 
	$("#content").on('click', "#add-item", function() {

		var treatmentElements = $('.treatment-item');
		var values = get_table_column_values_array( treatmentElements );
		

		$('#append').append( create_table_row_html( values ) );
		clear_input_values( treatmentElements );

	});


	//handle deleting treatment item
	$("#content").on('click', ".delete-treatment-item", function() {

		console.log("ran");
		delete_table_row( $(this) );


	});



});