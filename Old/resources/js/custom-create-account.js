$(document).ready(function() {


	/*
	 * Function that hides/shows necessary forms for doctor/regular user based on dropdown selection
	 */

	function showHideForm( value ) {
		
		switch( value ) {
			
		case "doctor":
			$('#general-user-signup').hide();
			$('#doctor-signup').show();
			break;
		case "user":
			$('#doctor-signup').hide();
			$("#general-user-signup").show();
			break;
		default:
			$('#doctor-signup').hide();
			$("#general-user-signup").hide();
		}
	}
	
	//handle when select option is changed:
	$('#show-form').change(function() {
		var showFormValue = $('#show-form').val();
		showHideForm( showFormValue );
	});





});