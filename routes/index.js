var fs = require('fs');
var express = require('express');
var picture = require('../camera/picture.js');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/latest.jpg', function (req, res) {
    picture(function (filename) {
        //if (filename.charAt(filename.length - 1) === '~') {
        //    filename = filename.substring(0, filename.length - 1);
        //}
        
        var img = fs.readFileSync('pictures/' + filename);
        res.end(img, 'binary');
    });
});

module.exports = router;