var express = require('express');
var router = express.Router();
var standupsController = require('../controllers/standupsController');



router.get('/standupnotes', standupsController.get);
router.get('/newnote', (req, res) => { res.render('newnote', {title:"title"}) });
router.post('/newnote', standupsController.post);

module.exports = router;
