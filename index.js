var Twit = require('twit');
var Twitter = new Twit(require('./config.js'));

function postHello() {
    Twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
        console.log(data)
    });
}

function search() {
    Twitter.get('search/tweets', { q: 'wakanda', count: 100 }, function(err, data, response) {
        console.log(data)
    })
}

function main() {
    search();
}

main();