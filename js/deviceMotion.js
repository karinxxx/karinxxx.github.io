$(function(){
    //加速度のイベント

window.addEventListener('devicemotion',shakeDevice);

function shakeDevice(evt){
    var x = evt.acceleration.x;
    var y = evt.acceleration.y;
    var z = evt.acceleration.z;

    $('#device li').eq(0).text('加速度x: ' + x);
    $('#device li').eq(1).text('加速度x: ' + y);
    $('#device li').eq(2).text('加速度x: ' + z);

}

});
