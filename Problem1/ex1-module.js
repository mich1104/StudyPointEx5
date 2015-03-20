/**
 * Created by Michael on 19/03/15.
 */
function _forEach(arr, callback){

    arr.forEach(callback);

}
function _filter(arr, callback){

    var arr2 = arr.filter(callback);
    return arr2;
}
function _map(arr, callback){

    var arr2 = arr.map(callback);
    return arr2;
}

var utils = {

    forEach: _forEach,
    filter: _filter,
    map: _map
};

this.exports = utils;