const openDefaultBrowser = function (url) {
      var exec = require('child_process').exec;
       switch (process.platform) {
         case "darwin":
           exec('open ' + url);
           break;
         case "win32":
           exec('start ' + url);
           break;
         default:
           exec('xdg-open', [url]);
       }
    }
    openDefaultBrowser('http://localhost:8080')
    
    var ws=require("nodejs-websocket")
    let id=0
    var server=ws.createServer(function(conn){
        id++
        conn.name="p"+id
        broadcast(server,'有新人加入。')
        conn.on("text", function(str){
            if(str.slice(0,9)=='nickname|'){
                conn.name=str.split('|')[1]
                broadcast(server,conn.name+'上线了。')
                return
            }
            broadcast(server,conn.name+':'+str)
        })
        conn.on('connect',function(){
            conn.name="name"
        })
        conn.on("close",function(code,reason){
            console.log("Connection closed")
        })
    }).listen(8081,()=>console.log('socket server listening on:8081'))
    function broadcast(server, msg){
        server.connections.forEach(function(conn){
            conn.sendText(msg)
        })
    }