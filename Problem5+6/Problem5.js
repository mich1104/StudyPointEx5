/**
 * Created by Michael on 20/03/15.
 */
var request = require('request');

var getQuote = {

    url: "http://www.iheartquotes.com/api/v1/random",
    method: 'GET'
};

request(getQuote, function(error, response, body){

    if(!error && response.statusCode === 200){

        console.log(body);
        return body;
    }
});

var utils = {

    requestQuote: request
}

this.exports = utils;