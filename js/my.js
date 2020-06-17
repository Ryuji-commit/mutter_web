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
        document.getElementById("#screen").value = msg;
    };

    connection.onclose = function() {
        console.log("コネクションを終了しまいた。");
    };
});

$('#submit').on('click', function() {
    connection.send(document.getElementById("#textarea1").value);
});