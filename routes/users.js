
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var vOne = 25;
  var vTwo = 10;

  while (vOne !== vTwo) {
    if (vOne > vTwo) {
      vOne = vOne - vTwo;
    } else {
      vTwo = vTwo - vOne;
    }
  }

  var response = 'The greatest common divisor is ' + vOne;
  res.send(response);
});

module.exports = router;
