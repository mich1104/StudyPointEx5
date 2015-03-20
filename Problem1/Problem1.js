/**
 * Created by Michael on 19/03/15.
 */
var a1 = [0,1,2,3,4];

//a1.forEach(function(item){ console.log(item); });
var a2 = a1.filter(function(item){return item >=3});
var a3 = a1.map(function(item){return item * 10});

//a2.forEach(function(item){ console.log(item); });
//a3.forEach(function(item){ console.log(item); });

function forEach(arr, callback){

    arr.forEach(callback);

}
function filter(arr, callback){

    var arr2 = arr.filter(callback);
    return arr2;
}
function map(arr, callback){

    var arr2 = arr.map(callback);
    return arr2;
}
//forEach(a1,function(item){ console.log(item); });
a2 = filter(a1, function(item){return item >=3});
//forEach(a2,function(item){ console.log(item); });
a3 = map(a1,function(item){return item * 10});
//forEach(a3,function(item){ console.log(item); });

var utils = require("./ex1-module");
utils.forEach(a1, function(item){ console.log(item); });