var total = 0;

// 1. user clicks #a10 - handle with .click
// 2. add 10 to 'total' total = total + 10;
//3. write total to #out

$('#a10').click(function() {
 	 total = total + 10

	$('#out').text(total);
})

$('#a20').click(function() {
 	 total = total + 20

	$('#out').text(total);
})

$('#a30').click(function() {
 	 total = total + 30

	$('#out').text(total);
})


$('#n10').click(function() {
 	 total = total - 10

	$('#out').text(total);
})

$('#n20').click(function() {
 	 total = total - 20

	$('#out').text(total);
})

$('#n30').click(function() {
 	 total = total - 30

	$('#out').text(total);
})


$('#red').click(function() {
	$('#out').css({'background-color': 'red' , 'color': 'white'})
})

$('#blue').click(function() {
	$('#out').css({'background-color': 'blue' , 'color': 'white'})
})

$('#out').click(function() {
	total = 0
	$('#out').text(total)
	$('#out').css({'background-color' : 'white' , 'color': 'black'})
})
