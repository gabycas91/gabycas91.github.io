// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

//OPTION1
//$('#first').click(function() {
 // $('#bigimage').attr('src', 'img/1.jpg');
//});

//$('#second').click(function() {
 // $('#bigimage').attr('src', 'img/2.jpg');
//});

//$('#third').click(function() {
 // $('#bigimage').attr('src', 'img/3.jpg');
//});

//$('#fourth').click(function() {
 // $('#bigimage').attr('src', 'img/4.jpg');
//});

//1. Target all thumb nails with a click event
//2. Get 'src' attribute of whatever image is clicked on
//3. Update #bigmage with the new 'src' attribute

$('.thumb').click(function () {
	var newSrc = $(this).attr('src');  //whenever thumb is click, find src and srore it as a new variable
	$('#bigimage').attr('src', newSrc);
});