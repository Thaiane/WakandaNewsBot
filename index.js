var Twit = require('twit');
var Twitter = new Twit(require('./config.js'));


function postHello() {
    console.log("Oi, deu bom")
    Twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
        console.log(data)
        console.log("Oi, deu ruim")
    });
}


function main() {
    postHello();
}

main();