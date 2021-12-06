const dotenv = require('dotenv')
const Twitter = require('twitter')

dotenv.config({path: './config.env'});

const twitterClient = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_KEY,
    access_token_secret:process.env.TWITTER_ACCESS_SECRET
});

var r = Math.floor(Math.random()*100);

const shareTweet = async () => {

twitterClient.post(
    'statuses/update',
    {
        status: "Betty White is alive  (" + r + ")"
    },
    function (error, tweet, response) {
        if(!error) {
            console.log(tweet);
        }
        if(error) {
            console.log(error);
        }
    }
)
}
shareTweet();

setInterval(shareTweet, 1000*60*60);

//var stream = client.stream('statuses/filter', {track: '#RIPBettyWhite'});
//stream.on('data', function(event) {
  //console.log(event && event.text);
//});
 
//stream.on('error', function(error) {
//  throw error;
//});
 

