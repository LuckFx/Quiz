var express = require('express');
var router = express.Router();

/* GET authors page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Autores' });
});

module.exports = router;
