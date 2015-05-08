﻿var RaspiCam = require('raspicam');

module.exports = function (callback) {
    var camera = new RaspiCam({
        mode: 'photo',
        output: 'pictures/' + (new Date().toISOString()) + '.jpg',
        rotation: 180
    });
    
    camera.start();
    
    camera.on("read", function (err, timestamp, filename) {
        if (filename.charAt(filename.length - 1) !== '~') {
            callback(filename);
        }
    });
}