var request=require('request');
var env=require('../env');


function home(req, res){

  var info;
  request("http://api.nytimes.com/svc/elections/us/v3/finances/2016/president/totals.json?api-key="+env.api_key+"", function(error, response, body){
    if(!error && response.statusCode ==200){
      // var candidates=[];
      // info=body;
      // candidates.push(response.body.results);
      // console.log(candidates);
      // console.log(info.results);
      // console.log(candidates);
      res.render('./candidates/index', {body});
    }
  });

  // for(var i=0; i<candidates.length; i++){

  // }
}

module.exports = {
  home: home
}
