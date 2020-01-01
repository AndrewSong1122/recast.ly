import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);

    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
      //object
    };

    console.log(YOUTUBE_API_KEY);
    console.log(searchYouTube);
  }

  getVideos(query = 'whale shark') {
    searchYouTube({query: query, key: YOUTUBE_API_KEY}, (videos) => {
      this.setState({
        allVideos: videos,
        currentVideo: videos[0]
      });
    });
  }

  componentDidMount() {
    this.getVideos();
  }

  onItemClick(e) {

    console.log(e.target.id);

    var vidID = e.target.id;

    if (vidID) {
      for (var video of this.state.allVideos) {
        if (video.id.videoId === vidID) {
          this.setState({currentVideo: video});
        }
      }
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          {/* <div><button onClick={this.onItemClick}>btn</button></div> */}
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <div onClick={this.onItemClick}><VideoList videos={this.state.allVideos}/></div>
          </div>
        </div>
      </div>
    );


  }



}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
