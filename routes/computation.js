var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {
  let x = req.query.x !== undefined ? parseFloat(req.query.x) : Math.random() * 10;
  let result = Math.sin(x);

  res.render('computation', {
    title: 'Computation Bonus',
    xValue: x,
    sinResult: result
  });
});

module.exports = router;