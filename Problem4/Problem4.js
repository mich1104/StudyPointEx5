/**
 * Created by Michael on 19/03/15.
 */
var request = require('request');
var newPerson = {

    firstName: "Michael",
    lastName: "Overgaard",
    email: "m.g.overgaard@hotmail.com",
    street: "Rønnealle 33",
    zipCode: 3450,
    city: "Allerød"
};
var editPerson = {

    firstName: "Mads",
    lastName: "Larsen",
    email: "ml@hotmail.com",
    street: "En vej 20",
    zipCode: 3450,
    city: "Allerød"
};
var optionsPOST = {

    url: "http://web-cphbusiness.rhcloud.com/api/person/add",
    method: 'POST',
    body: newPerson,
    json: true
};
var optionsGETall = {

    url: "http://web-cphbusiness.rhcloud.com/api/person",
    method: 'GET'
};
//  Manually change the ID here
var optionsDelete = {
    url: "http://web-cphbusiness.rhcloud.com/api/person/delete/11",
    method:'DELETE'
}
//  Manually change the ID here
var optionsUpdate = {

    url: "http://web-cphbusiness.rhcloud.com/api/person/edit/10",
    method: 'POST',
    body: editPerson,
    json: true
}
/*request(optionsPOST, function(error, response, body){

    if(!error && response.statusCode === 200){

        return console.log(JSON.stringify(body));
    }
    console.log(error+ " : " +JSON.stringify(body));
});
*/

request(optionsDelete, function(error, response, body){

    if(!error && response.statusCode === 200){

        return console.log(JSON.stringify(body));
    }

    console.log("Deleted (Check for yourself to be sure)");
});


request(optionsGETall, function(error, response, body){

    if(!error && response.statusCode === 200){

        return console.log(JSON.stringify(body));
    }

    console.log(body);
});

/*request(optionsUpdate, function(error, response, body){

    if(!error && response.statusCode === 200){

        return console.log(JSON.stringify(body));
    }

    console.log("Edited (Check for yourself to be sure)");
});*/