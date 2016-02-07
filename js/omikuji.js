//おみくじ結果
var omikuji = [
    {
        result: '大吉',
        love: '整う',
        business:'成功'
    },
    {
        result: '吉',
        love: '耐える',
        business:'動くな'

    },
    {
        result: '凶',
        love: '別れる',
        business:'失敗'
    }
];
console.log(omikuji);

//DOMの読み込み
$(function(){
    $('#btn').on('click',function(){
        var randNum = math.floor(Math.random()*omikuji.length);
        //console.log(randNum);
        //結果
        $('.resultKekka').text(omikuji[randNum].result);
        $('.resultKekka').text(omikuji[randNum].love);
        $('.resultKekka').text(omikuji[randNum].business);
    });





});
