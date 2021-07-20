var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

users=[];
io.on('connection', function(socket){
    console.log('Connected');
    socket.on('setUsername', function(data){
        if(users.indexOf(data) > -1){
            socket.emit('userExists', data + ' Please use a new name!');
        } else{
            users.push(data);
            socket.emit('userSet', {username: data});
        }
    })

    socket.on('msg', function(data){
        io.sockets.emit('newmsg', data);
    })
});

http.listen(3000, function(){
    console.log("start server on port :3000")
});