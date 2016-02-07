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

            showWeather(date);

        }).fail(function(){
            console.log('ajax error!!!');
        });

        //htmlに表示する関数
        function showWeather(date){
            console.log(date);

            //地域名
            var areaName = date.name;
            $('#areaName').text(areaName);

            var areaTemp = date.main.temp;
            areaTemp = areaTemp - 273.15;
            $('#areaTemp').text(Math.round(areaTemp) + '度');
        }

            var areaHumidity = data.main.humidity;
            $('#areaHumidity').text(areaHumidity + '%');

            //天気
            var areaWeather = data.weather[0].description;
            $('#areaWeather').text(areaWeather);

            //天気アイコン
            var weatherIcon = 'http://openweathermap.lrg/img/w/' +data.weather[0].icon + '.png';
            $('#weatherIcon').append('<img src="'weatherIcon + '">');




    });
});
