env = require( "./env" );
candidates = [];

url = "http://api.nytimes.com/svc/elections/us/v3/finances/2016/president/totals.json?api-key="+env.api_key;
$.getJSON( url, function(data){

  $.each(data, candidates.push(new Candidates(data.name)));
});


var candidatesController = {
  index: function(req,res){
    res.render("candidates/index.hbs", {candidates});
  }
}

// module.exports={
//   index;
// }
