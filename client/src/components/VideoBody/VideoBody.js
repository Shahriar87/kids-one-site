// ----- VideoBody component
import React, { Component } from "react";

// require('./VideoBody.css');

class VideoBody extends Component {
    render() {
        return (
            <div>
                <div className="row cont">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-header">
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Recommended Videos</h5>
                                <p className="card-text">Announcement Body</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-header">
                                Video
                            </div>
                            <div className="card-body">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe title= "video" width="560" height="315" src="https://www.youtube.com/embed/uhHmR7zlGbg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                    </iframe>
                                </div>
                                <p className="card-text">Video description.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                    crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                    crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                    crossorigin="anonymous"></script>

            </div>











        );
    }
}

export default VideoBody;