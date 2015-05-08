# rpi-camera-surveillance

Requirements:
* Raspberry Pi with Raspbian
* Raspberry Pi camera

## Get started
Clone repository, and make sure you have Node.js installed and Raspberry Pi Camera activated in raspi-config.

Run by entering:
> node app.js

You could also use forever, which would run it in the background, even if you shutdown ssh:

> sudo npm install -g forever

> forever start app.js

When it's started, go to this URL to get the latest photo:

http://ip.to.raspberry.pi:3000/latest.jpg