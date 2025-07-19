/* jQuery Example*/
$(document).ready(function(){
	// draggable start
	$('#dragg').draggable();
	// accordion start
	$( "#accordion" ).accordion({
    collapsible: true
  });
	// autocomplete start
	let data = [
		"HTML",
		"CSS",
		"BOOTSTRAP",
		"JAVASCRIPT",
		"JQUERY",
		"PHP",
		"C",
		"C++",
		"SQL",
		"MYSQL",
		"PYTHON"
	];
	$('#c_name').autocomplete({
    source: data
  });
	// counter_up start
	$('.counter').counterUp({
    delay: 10,
    time: 1000
	});
});




















