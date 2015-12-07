var CandidateView= function(candidate){
  this.candidate=candidate;

  this.$el=$("<div class='candidate'></div>");
  this.render();

  $(".candidates").append(this.$el);
};

CandidateView.prototype={
  render: function(){
    var self=this;
    self.$el.html(self.candidateTemplate(self.candidate));

    var showButton = self.$el.find(".showCandidates");
    // var candidatesDiv= self.$(".candidate");
    // candidatesDiv.hide();

    // showButton.on("click", function(){
    //   self.toggleCandidates(candidatesDiv);
    // })
  },

  candidateTemplate: function(){
    var html = $("<div>");
    html.append("<h3>" + this.candidate.name + "</h3>");
    return(html);
  }
};
