// ----- ContentBody component
import React, { Component } from "react";

class ContentBody extends Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <div class="row cont">
                    <div class="col_1 col-sm-3 card_body">News</div>
                    <div class="card">
                        <div class="card-header">
                            Featured
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="col_2 col-sm-6">Main</div>
                    <div class="col_3 col-sm-3">Messages</div>
                </div>
            </div>
        );
    }
}

export default ContentBody;