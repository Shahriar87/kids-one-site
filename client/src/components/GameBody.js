// -----GameBody component
import React, { Component } from "react";


class GameBody extends Component {
    render() {
        return (
            <div>
            <h1>Hello, world!</h1>
                <div class="row">
                    <div class="col-md-2">instructions</div>
                    <div class=" col-md-8 embed-responsive embed-responsive-16by9">
                     <iframe class="embed-responsive-item" src=""></iframe>
                    </div>                                        
                    <div class="col-md-2">TBD</div>
                </div>
              </div>
        );
    }
}

export default GameBody;