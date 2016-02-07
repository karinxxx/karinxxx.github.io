$(function(){
    console.log('DOM読み込んだよ');
    //btnをクリックしたら
    $('#btn').on('click',function(){

        //ajaxロード
        $.ajax({
            url:'mydate.json',
            type:'GET',
            dateType:'json'
        }).done(function(data){
            //成功
            console.log('data');
            showContent(data);

        }).fail(function(){
            //失敗
            console.log('ajax error');
        });

    });

function showContent(data){
    //$('#container').append(data);
    for (var cnt= 0; cnt < data.length; cnt++){
        $('#container li').eq(cnt).text(data[cnt].name +
        'さんの住んでる場所は' +data[cnt].address+'です。');
    }
}



});
