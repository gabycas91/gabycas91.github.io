$('#myForm').submit(function (event) {
	event.preventDefault();

	console.log(event);

	var name = $('#name-input').val();
	$('#target').text(name);
})


$('#name-input').keyup(function (event) {
	console.log(event);
})



/*$('#name-input').keyup(function (event) {
	if (event.keyCode == 13) {
	console.log('you hit enter!')	
	}
})*/