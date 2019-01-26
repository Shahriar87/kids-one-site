// ----- ContentBody component
import React, { Component } from "react";

class VideoBody extends Component {
    render() {
        return (
            <div>
                <h1>The Video page!</h1>
                {/* content start */}
                <div class="row">
                    <div class="col-sm-3">.col-sm-3</div>
                    <div class="col-sm-6">.col-sm-6</div>
                    <div class="col-sm-3">.col-sm-3</div>
                </div>
            </div>
        );
    }
}

export default VideoBody;