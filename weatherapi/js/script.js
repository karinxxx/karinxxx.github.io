$(function(){
    //GPS
    navigator.geolocation.getCurrentPosition(pos){
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;

        console.log(lat,lon);
    });
});
