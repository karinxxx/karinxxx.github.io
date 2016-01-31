$(function(){
    //加速度のイベント

window.addEventListener('devicemotion',shakeDevice);

function shakeDevice(evt){
    var x = evt.acceleration.x;
    var y = evt.acceleration.y;
    var z = evt.acceleration.z;

    $('#device li').eq(0).text('加速度x: ' + x);
    $('#device li').eq(1).text('加速度y: ' + y);
    $('#device li').eq(2).text('加速度z: ' + z);
    if(Math.abs(x) > 15 || Math.abs(y) > 15 || Math.abs(z) > 15){
        $('#result').text('振ったよ');
    }

}

});


    //傾き　ジャイロセンサー
    window.addEventListener('deviceorientation',shakeDevice);

    function roteDevice(evt){
        var x = evt.beta;
        var y = evt.gamma;
        var z = evt.alpha;

        $('#device li').eq(0).text('傾き x: ' + x);
        $('#device li').eq(1).text('傾き y: ' + y);
        $('#device li').eq(2).text('傾き z: ' + z);
}

});
