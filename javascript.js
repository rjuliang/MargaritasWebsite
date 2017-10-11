

/*HAMBURGUER MENU*/


$("#ulo").addClass("js").before('<div id="hamu">☰</div>');

$("#hamu").click(function(){
	$("#ulo").toggle();
});

$(window).resize(function(){
	if(window.innerWidth > 500 ) {
		$("#ulo").removeAttr("style");
	}
});


/*GOOGLE MAPS*/


function myMap() {
    var mapOptions1 = {
        center: new google.maps.LatLng(38.514586, -89.982756),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
		
    }
	var mapOptions2 = {
        center: new google.maps.LatLng(38.5435346, -90.0272077),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
	var mapOptions3 = {
        center: new google.maps.LatLng(38.5349053, -89.6928827),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

var map1 = new google.maps.Map(document.getElementById("map1"), mapOptions1);
var map2 = new google.maps.Map(document.getElementById("map2"), mapOptions2);
var map3 = new google.maps.Map(document.getElementById("map3"), mapOptions3);

}

