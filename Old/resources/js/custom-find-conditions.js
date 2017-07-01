$(document).ready(function() {

	/*
	*	file for find-contions
	*/


	/******************************************************************************
	
		Initialize search
	
	******************************************************************************/
	
	

	/*
	*	search options - array consisting of all search options (the class name of the td elements you want to search.  element - 
	*	id of element holding all search options (text - say the id was #element - you would use "element"). 
	*/

	var options = {
	    valueNames: ['search-item'],
	    page: 10,
	    innerWindow: 1,
		plugins: [
		  ListPagination({})
		]
	};

	var userList = new List( 'search-conditions', options );






});