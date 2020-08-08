var Twit = require('twit');
var Twitter = new Twit(require('./config.js'));

function postHello() {
    Twitter.post('statuses/update', { status: 'Hello Wakanda!' }, function(err, data, response) {
        console.log(data)
    });
}

function search(callback) {
    console.log('search')
    Twitter.get('search/tweets', { q: 'wakanda', count: 3, lang: 'pt' },
        function(err, data, response) {
            if (!err) {
                for (let i = 0; i < data.statuses.length; i++) {
                    let tweet = data.statuses[i];
                    callback(tweet);
                }
                return;
            } else {
                console.log(err);
            }
        }
    )
}

function retweet(tweet) {
    console.log('===================================')
    console.log(tweet)
    console.log('===================================')
    Twitter.post(
        'statuses/retweet/:id',
        { id: tweet.id_str },
        function(err, data, response) {
            if (err) {  // here
                console.log(err.message);
                return;
            }
        }
    );
}

function main() {
    search(retweet);
}

main();