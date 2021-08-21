import React, { Component } from 'react';
// import './App.css';
import _ from 'lodash';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail'
const YT_API_KEY = process.env.YT_API_KEY;

class VideoBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('kids video')
    }

    videoSearch(term) {
        YTSearch({ key: YT_API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

export default VideoBody;