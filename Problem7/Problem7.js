/**
 * Created by Michael on 20/03/15.
 */
var currency = require("./CurrencyModule");
currency.getConverter(function(err,convert){
    console.log(convert(100,"DKK","USD"));
});