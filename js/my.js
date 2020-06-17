$(function(){
    connection = new WebSocket('wss://echo.websocket.org');

    connection.onopen = function(e) {
        console.log("コネクションを開始しました。");
    };

    connection.onerror = function(error) {
        console.log("エラーが発生しました。");
    };

    connection.onmessage = function(e) {
        let msg = e.data;
        document.getElementById("#screen").text(msg);
        console.log(msg);
    };

    connection.onclose = function() {
        console.log("コネクションを終了しまいた。");
    };
});

$('#submit').on('click', function() {
    msg = document.getElementById("#textarea1").value
    connection.send(msg);
    console.log(msg);
});