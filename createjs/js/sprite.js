//先読みするリスト
var manifest = [
{src:'img/tomato.png'},
{src:'img/pumpkin.png'},
{src:'img/hourensou.png'}
];


//DOMを読み込んだら
$(function(){

    //ステージ（canvas)の設定
    var stage = new createjs.Stage('canvasEl');

    //loadQueue ローディング
    var loadQueue = new createjs.LoadQueue();
    loadQueue.loadManifest(manifest);//読み込み開始

    loadQueue.addEventListener('complete',function(){
        console.log('読み込み完了！！！');
        showVege();
    });


    function showVege(){
    //スプライトシートの設定
    var vcSprite = new createjs.SpriteSheet(vitaminCSprite);
    //スプライトの設定
    var vitaminC = new createjs.Sprite(vcSprite,'stand');
    stage.addChild(vitaminC);
    vitaminC.x = 150;
    vitaminC.y = 480;
    vitaminC.alpha = 0;
    //アニメーション
    createjs.Tween.get(vitaminC).to({alpha:1},500).wait(1000).call(vitaminCWalk).to({x:500},4000).call(vitaminCStand);
        stage.update();

        //ビタミンCが歩く
    function vitaminCWalk(){
        vitaminC.gotoAndPlay('walk');
    }
    //ビタミンC止まる
    function vitaminCStand(){
        vitaminC.gotoAndPlay('stand');

    }

    var vcSprite = new createjs.SpriteSheet(ironSprite);
    var iron = new createjs.Sprite(vcSprite,'stand');
    stage.addChild(iron);
    iron.x = 150;
    iron.y = 480;
    iron.alpha = 0;

    createjs.Tween.get(iron).to({alpha:1},500).wait(1000).call(ironWalk).to({x:500},4000).call(ironStand);
        stage.update();

        //ironが歩く
    function ironWalk(){
        iron.gotoAndPlay('walk');
    }
    //iron止まる
    function ironStand(){
        iron.gotoAndPlay('stand');


    };




    //フレームレート
    createjs.Ticker.setFPS(30);
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    //アニメーションの設定
    createjs.Ticker.addEventListener('tick',function(){

    //ステージの更新
    stage.update();

    });
});
