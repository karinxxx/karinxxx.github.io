$(function(){
    //GPS
    navigator.gelocation.getCurrentPosition(pos){
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;

        console.log(lat,lon);
    });
});
