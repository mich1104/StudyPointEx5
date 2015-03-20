/**
 * Created by Michael on 20/03/15.
 */
var http = require("http");
var request = require('request');
var utils = require('./Problem5');
var body = "Refresh to get a quote";
var getQuote = {

    url: "http://www.iheartquotes.com/api/v1/random",
    method: 'GET'
};
function newQuote(){

    request(getQuote, function(error, response, _body){

        if(!error && response.statusCode === 200){

            body = _body;
        }
    });
}
function processRequest(req, res){

    newQuote();
    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
};

var s = http.createServer(processRequest);
s.listen(9000);