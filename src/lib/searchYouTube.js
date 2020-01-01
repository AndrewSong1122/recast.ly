var searchYouTube = ({query, max = 5, key}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    maxResults: max,
    q: query,
    videoEmbeddable: 'true',
    type: 'video',
    key: key
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    });



};

export default searchYouTube;
