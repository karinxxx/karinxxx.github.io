$(function(){
    //GPS
    navigator.geolocation.getCurrentPosition(function(pos){
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;

        console.log(lat,lon);

        //定数　変わらない
        const apikey = '6416cd90d913c3b8ed55195b319d5ac7';
        //openweathermapのお天気情報のURL
        var url = 'api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=' + apikey;

        $.ajax({
            url:url,
            dateType:'json'
        }).done(function(date){

            console.log(date);

        }).fail(function(){
            console.log('ajax error!!!');
        });
    });
});
