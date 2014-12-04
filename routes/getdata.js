var request = require('request');
var taipeiopendata = "http://data.taipei.gov.tw/opendata/apply/query/MzVERDUyOTItNjI1NC00NjcyLUE3OEItNDY3ODhDMURFM0Yy?$format=json";

module.exports.taipei = function(req, res, next) {
        request(taipeiopendata, function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var body = JSON.parse(body);
                        // console.log(typeof feature);
                        var FeatureCollection = {
                            "type": "FeatureCollection",
                            "features": []
                        };
                        var features = [];
                        for (var ln = 0; ln < body.length; ln++) {
                            var feature = {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [body[ln].longitude, body[ln].latitude]
                                },
                                "properties": {
                                    "cat1": body[ln].cat1,
                                    "cat2": body[ln].cat2,
                                    "memo_tel": body[ln].memo_tel,
                                    "memo_fax": body[ln].memo_fax,
                                    "memo_cost": body[ln].memo_cost,
                                    "memo_time": body[ln].memo_time,
                                    "stitle": body[ln].stitle,
                                    "xbody": body[ln].xbody,
                                    "xurl": body[ln].xurl,
                                    "address": body[ln].address,
                                    "info": body[ln].info,
                                    "mrt": body[ln].mrt,
                                    "file": body[ln].file,
                                }
                            };
                            features.push(feature);
                        }
                        FeatureCollection.features = features;
                        res.jsonp(FeatureCollection);
                    };
                });
};
