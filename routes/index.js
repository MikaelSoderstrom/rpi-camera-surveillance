var fs = require('fs');
var path = require('path');
var express = require('express');
var picture = require('../camera/picture.js');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/latest.jpg', function (req, res) {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', 0);

    picture(function (filename) {
        //if (filename.charAt(filename.length - 1) === '~') {
        //    filename = filename.substring(0, filename.length - 1);
        //}
        
        var img = fs.readFileSync(path.join(__dirname, '../pictures/') + filename);
        res.end(img, 'binary');
    });
});

module.exports = router;