$(document).on('ready', function(){
	
	// console.log('document ready');

	/*
	This function is a event listener callback. 
	When a user types anything in the input text
	areas, it gets the values, converts to floats, 
	and adds them up. The added value is then
	displayed on the page
	*/
	$("input[type='text']").live('keyup', function(){

		var inputs = $("input");
		var answer = 0;
		for (i = 0; i< inputs.length; i++){
			num = parseFloat($($("input")[i]).val());
			if (isNaN(num)) num = 0;	
			answer += num;
		}
		$("#result").html("<h1> SUM: " + answer + "</h1>");
	});

	/*
	This function is called with the button is clicked.
	It gets the number of current input boxes adds it
	by 1 to get the new count. 

	Then appends a new input tag with same class as the
	ones before. 
	*/
	$(".add_number").on('click', function(){

			var new_count = parseInt($(this).attr('id'))  + 1;
			// console.log(new_count);

			$(this).attr('id', new_count);
			$(".inputs").append("<input class='number' id='number" + new_count +"' type='text' placeholder='Enter number " + new_count +"' >");

	});

});
