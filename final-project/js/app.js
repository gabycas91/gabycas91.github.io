

var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.0902, lng: -95.7129},
    zoom: 4
});

var marker1 = new google.maps.Marker( {
	position: {lat: 43.2994, lng: -74.2179},
	map: map,
	title: 'New York'
});

var marker2 = new google.maps.Marker( {
	position: {lat: 38.9072, lng: -77.0369},
	map: map,
	title: 'Washington D.C'
});

var marker3 = new google.maps.Marker( {
	position: {lat: 41.6032, lng: -73.0877},
	map: map,
	title: 'Connecticut'
});

var marker4 = new google.maps.Marker( {
	position: {lat: 38.8026, lng: -116.4194},
	map: map,
	title: 'Nevada'
});

var marker5 = new google.maps.Marker( {
	position: {lat: 41.2033, lng: -77.1945},
	map: map,
	title: 'Pennsylvania'
});

var marker6 = new google.maps.Marker( {
	position: {lat: 27.6648, lng: -81.5158},
	map: map,
	title: 'Florida'
});

	var contentString1 = '<div id="content">' +
		'<div id="siteNotice">' +
		'</div>' +	
		'<p><a href="../final-project/coldspring.html">'+
            'Cold Spring</a></p>';


	var infoWindow1 = new google.maps.InfoWindow({
		content: contentString1
	});

		marker1.addListener('click', function() {
		infoWindow1.open(map, marker1);
	});


		// var contentString2 = '<div id="content">' +
		// '<div id="siteNotice">' +
		// '</div>' +	
		// '<p><a href="final-project/coldspring.html">'+
  //           'Cold Spring</a></p>';


	// var infoWindow2 = new google.maps.InfoWindow({
	// 	content: contentString2
	// });

	// 	marker2.addListener('click', function() {
	// 	infoWindow1.open(map, marker2);
	// });


