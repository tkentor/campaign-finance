var CandidateView= function(candidate){
  this.candidate=candidate;

  this.$el=$("<div class='candidate'></div>");
  this.render();

  $(".candidate").append(this.$el);
};

CandidateView.prototype={
  render: function(){
    var self=this;
    self.$el.html(self.candidateTemplate(self.candidate));

    var showButton = self.$el.find(".showCandidates");

    candidasDiv.hide();

    showButton.on("click", function(){
      self.toggleCandidates(candidatesDiv);
    })
  },

  candidateTemplate: function(){
    var html = $("<div>");
    html.append("<h3>" + candidate.name + "</h3>");
    return(html);
  }
};
