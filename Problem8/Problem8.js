/**
 * Created by Michael on 20/03/15.
 */
var http = require("http");
var dispatcher = require('httpdispatcher');
var players = [];
players.push({id: 1, name: "James Rodriguez", country: "-"});
players.push({id: 2, name: "Thomas Mueller", country: "-"});
players.push({id: 3, name: "Messi", country: "-"});
players.push({id: 4, name: "Neymar", country: "-"});
players.push({id: 5, name: "van Persie", country: "-"});

function processRequest(req, res){

    dispatcher.dispatch(req, res);
}
dispatcher.onGet("/allplayernames", function(req, res){

    var body = JSON.stringify(players);
    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
});

var server = http.createServer(processRequest);
server.listen(9000);