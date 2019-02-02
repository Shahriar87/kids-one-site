// ----- ContentBody component
import React, { Component } from "react";
import MessengerApp from "../messenger/MessengerApp";

const styles = {
    width: "18rem"
};

class ContentBody extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Kids-one-site!</h1>
                <div className="row cont">
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-header">
                                News
                        </div>
                            <div className="card-body">
                                News Content
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Announcements
                            </div>
                            <div class="card-body">
                                <h5 className="card-title">Announcement Title</h5>
                                <p className="card-text">Announcement Body</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-header">
                                Messages
                            </div>
                            <div className="card-body">
                                {/* <MessengerApp /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentBody;