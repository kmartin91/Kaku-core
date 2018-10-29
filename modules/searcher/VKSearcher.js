const request = require('request');

function VKSearcher(config) {
    //
}

VKSearcher.prototype.search = function(keyword, limit = 20) {
    keyword = encodeURIComponent(keyword);
    let type = 'cloudcast';
    let queryURL =
      `https://api-2.datmusic.xyz/search?q=${keyword}&page=${limit}`;
  
    return new Promise((resolve, reject) => {
      request(queryURL, (err, response, body) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        else {
          const rawTracks = JSON.parse(body);
          const VKTracks = rawTracks['data'].map(rawTrack => {
            const track = new VKTrack();
            track.init(rawTrack);
  
            return track;
          });
  
          resolve(VKTracks);
        }
      });
    });
  }
  
  module.exports = VKSearcher;