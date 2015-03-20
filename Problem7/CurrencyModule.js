/**
 * Created by Michael on 20/03/15.
 */
var request = require('request');
var parseString = require('xml2js').parseString;
var url = "http://www.nationalbanken.dk/_vti_bin/DN/DataService.svc/CurrencyRatesXML?lang=da";
var currencyMap = new Object();
currencyMap["DKK"] = 1;
function getConverter(callback){

    request(url, function(error, response, xml){

        if(!error && response.statusCode === 200){

            parseString(xml, function (err, result) {
                //console.dir(result);
                /*result.exchangerates.dailyrates[0].currency.forEach(function(r){

                    var curCode = r.$.code;
                    var curRate = r.$.rate;
                    curRate = curRate/100;
                    currencyMap[curCode] = curRate;
                });*/
                var rates = [];
                result.exchangerates.dailyrates[0].currency.forEach(function(r){

                    var rate = r.$;
                    rates.push({

                        code: rate.code,
                        desc: rate.desc,
                        rate: rate.rate
                    });
                    rates.push({

                        code: "DKK",
                        desc: "Danske Kroner",
                        rate: "100"
                    });
                });
                //console.log(rates);
                var f = function(amount, from, to){

                    var fromCurr = getCurrency(rates, from);
                    var toCurr = getCurrency(rates,to);
                    var result = amount * parseFloat(fromCurr.rate) / parseFloat(toCurr.rate);
                    return {amount: amount, from: fromCurr.desc, to: toCurr.desc, result: result};
                }
                callback(null, f);
            });
        }
    })
}

function getCurrency(rates,code){

    var found = rates.filter(function(rate){

        return rate.code === code;
    });
    return found[0];
}

module.exports.getConverter = getConverter;