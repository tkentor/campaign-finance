var Candidate = require('../models/candidate');

var candidatesController = {

  index: function (req, res) {
    res.render('candidates/index.hbs', {
      candidates: Candidate.all()
    });
  },

  show: function (req, res) {
    console.log(req.params);
    res.render('candidates/show.hbs', {
      candidate: req.params.id

    });
  }
};

module.exports = candidatesController;
