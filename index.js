var Twit = require('twit');
var Twitter = new Twit(require('./config.js'));

function postHello() {
    Twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
        console.log(data)
    });
}

function main() {
    postHello();
}

main();