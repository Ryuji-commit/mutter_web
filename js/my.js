const peer = new Peer({
    key: 'cfd485e7-65de-4b3d-8c50-f149c695607d',
    debug: 3,
});
let room = null;

peer.on('open', function(){
    console.log('connected');   
    joinedRoom();
});

peer.on('error', function(err){
    console.log(err.message);
});

peer.on('close', function(){
    console.log('closed');
});

function joinedRoom(){
    room = peer.joinRoom('roomName',{
        mode: 'sfu',
    });

    // 新たな人が入室
    room.on('peerJoin', peerId => {
    });

    // 人が離れる
    room.on('peerLeave', peerId => {
    });

    // ログを受信
    room.once('log', logs => {
        for (const logStr of logs) {
          const { messageType, message, timestamp } = JSON.parse(logStr);
        }
    });

    // チャット受信
    room.on('data', ({ data, src }) => {
        var msg = data;
        insertmsg(msg);
    });

    //　チャット送信
    $('#submit').on('click', function() {
        var msg = $("#textarea1").val();
        $("#textarea1").val('');
        room.send(msg);
        insertmsg(msg);
    });
}

function insertmsg(msg){
    var top_max = $(window).height()*0.7;
    var left_max = $(window).width()*0.9;
    var top = Math.floor(Math.random() * top_max);
    var left = Math.floor(Math.random() * left_max);

    var insert_html = $('<div class="chat-message"><p>' + msg + '</p></div>').hide().fadeIn(500).offset({ top: top, left: left }).delay(10000).fadeOut('slow');
    $("#screen").append(insert_html);
}