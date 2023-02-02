"use strict"
function init () {
    let x = new google.maps.LatLng(40.192305, 44.505837) 
    let mapOptions = {
        center: new google.maps.LatLng(40.192305, 44.505837),
        mapTypeId: google.maps.MapTypeId.HIBRID,
        zoom:13
    }
    let venueMap = new google.maps.Map(document.getElementById("map"),mapOptions)
}
