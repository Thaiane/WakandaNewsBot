var Twit = require('twit');
var Twitter = new Twit(require('./config.js'));

function postHello() {
    Twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
        console.log(data)
    });
}

const stream = T.stream('statuses/filter', {track: 'Wakanda'});

stream.on('tweet', tweet => {
    console.log("Achei")
});

Twitter.get(
    'search/tweets',
    { q: getSearchKey(), count: 50, lang: 'en' },
    function(err, data, response) {
        let tweetList = [];
        if (!err) {
            for (let i = 0; i < data.statuses.length; i++) {
                let tweet = data.statuses[i];
                tweetList.push(tweet);
            }
            callback(tweetList);
            return;
        } else {
            console.log(err);
        }
    }
);
}

function main() {
    postHello();
}

main();