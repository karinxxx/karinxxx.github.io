console.log('index03.jsが読み込まれました');

function placeholders(){
    var obj = document.getElementById("placeholder");
    if(obj.value == 'キーワードを入力'){
        obj.value = "";
        obj.style.color = '#000';
    }
}
