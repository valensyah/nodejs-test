var express = require('express');
var router = express.Router();
const soalController = require('../controllers/SoalController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {home: '', data: null});
});

router.post('/soal-1', soalController.soalSatu)
router.get('/soal-3', soalController.soalTiga)
router.get('/soal-4', function(req, res, next) {
  res.render('soal4', { title: 'soal 4' })
})

module.exports = router;
