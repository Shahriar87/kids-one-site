// ----- ContentBody component
import React, { Component } from "react";
import App from "../messenger/App";

const styles = {
    width: "18rem"
};

class ContentBody extends Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <div className="row cont">
                    <div className="col_1 col-sm-3 card_body">News</div>
                    <div className="card">
                        <div className="card-header">
                            Featured
                        </div>
                        <div class="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="col_2 col-sm-6">Main</div>


                    <div className="col_3 col-sm-3">
                    <div className="card" style={styles}>
                            <div className="card-header">
                                Messages
                </div>
                <div className="card-body">
                            <App />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentBody;