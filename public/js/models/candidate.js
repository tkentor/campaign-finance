var Candidate = function(info){
  this.name = info.name;
}

Candidate.prototype={
  fetchCandidate: function(){
    url = "http://api.nytimes.com/svc/elections/us/v3/finances/2016/president/totals.json?api-key="+env.api_key;
    // saving the ajax request to a local variable
    var request = $.getJSON(url)
    // the promise function on a successful ajax call.
    .then(function(response) {
      // local variable in the promise callback instantiated as an empty array
      var candidates = [];
      // loop over each element in the response
      for(var i = 0; i < response.length; i++){
        // create a new JS Artist object for each element in the response
        candidates.push(new Candidate(response[i]));
      }
      // returns artists in the promise so that it can be passed in as an argument to future promises
      return candidates;
    })
    .fail(function(response){
      console.log("candidates fetch fail")
    })
    // explicit return of the fetch function that returns the json request with artists available an argument for future promises
    return request
  }
}
