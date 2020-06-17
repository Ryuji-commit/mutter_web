$(function(){
    connection = new WebSocket('wss://echo.websocket.org');

    connection.onopen = function(e) {
        console.log("コネクションを開始しました。");
    };

    connection.onerror = function(error) {
        console.log("エラーが発生しました。");
    };

    connection.onmessage = function(e) {
        var msg = e.data;

        var top_max = $(window).height()*0.7;
        var left_max = $(window).width()*0.9;
        var top = Math.floor(Math.random() * top_max);
        var left = Math.floor(Math.random() * left_max);

        var insert_html = $('<div class="chat-message"><p>' + msg + '</p></div>').hide().fadeIn(500).offset({ top: top, left: left }).delay(10000).fadeOut('slow');
        $("#screen").append(insert_html);
    };

    connection.onclose = function() {
        console.log("コネクションを終了しまいた。");
        $("#screen").remove();
    };
});

$('#submit').on('click', function() {
    var msg = $("#textarea1").val();
    $("#textarea1").val('');
    connection.send(msg);
});