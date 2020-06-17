const peer = new Peer({
    key: 'cfd485e7-65de-4b3d-8c50-f149c695607d',
    debug: 3
});

$(function(){
    room = peer.joinRoom('roomname', {mode: 'sfu'});

    // チャット送信
    $('#submit').on('click', function() {
        var msg = $("#textarea1").val();
        $("#textarea1").val('');
        room.send(msg);
    });

    // チャット受信
    room.on('data', function(data){
        var msg = data.data;

        var top_max = $(window).height()*0.7;
        var left_max = $(window).width()*0.9;
        var top = Math.floor(Math.random() * top_max);
        var left = Math.floor(Math.random() * left_max);

        var insert_html = $('<div class="chat-message"><p>' + msg + '</p></div>').hide().fadeIn(500).offset({ top: top, left: left }).delay(10000).fadeOut('slow');
        $("#screen").append(insert_html);
    });
    
});