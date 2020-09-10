var request = require("request");
var toneurl = "https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/9a712a0a-4116-46c6-969c-a72538130b98/v3/tone?version=2017-09-21&text=";
var toneapikey = 'AswQhaA__Apuz-Ijtszt-EIlI92ZrETRSGpwDdQWsoB8' ;

var text= "I'm in so much pain" ;
toneurl = toneurl + encodeURI(text)
request.get({
  url: toneurl,
  auth:{username: 'apikey',
        password: toneapikey}

}, function(err, respons, body){
    console.table(body)
})
