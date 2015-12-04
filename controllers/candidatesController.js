var Candidate = require('../models/candidate');

var candidatesController = {
  index: function (req, res) {
    res.render('candidates/index.hbs', {
      candidates: Candidate.all()
    });
  },

//   show: function (req, res) {
//     res.render('candidates/show.hbs', {
//       candidate: candidates[req.params.id]
//     });
//   },
//
//
// }
//
module.exports = candidatesController;
