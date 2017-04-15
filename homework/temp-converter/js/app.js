var farTemp = 0;
var celTemp = 0;

var image = document.getElementById("doghot");

$('#fahrenheit').keyup(function () {
	farTemp = $('#fahrenheit').val();
	celTemp = (farTemp-32) / 1.8;
	console.log(celTemp)
    $('#celsius').val(celTemp);

    if (celTemp > 21) {
    	$('body').css('background-color' , 'red');
   	} else if (celTemp < 4) {
		$('body').css('background-color' , 'blue');
	} else {
		$('body').css('background-color' , 'white');
	}
 })

$('#celsius').keyup(function () {
	celTemp = $('#celsius').val();
	farTemp = (celTemp * 1.8) + 32;
    $('#fahrenheit').val(farTemp);

    if (farTemp > 70) {
    	$('body').css('background-color' , 'red');
   	} else if (farTemp < 35) {
		$('body').css('background-color' , 'blue');
	} else {
		$('body').css('background-color' , 'white');
	}
 })
 
   



