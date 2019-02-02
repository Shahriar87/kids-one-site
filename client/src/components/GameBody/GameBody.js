// -----GameBody component
import React, { Component } from "react";
import MessengerApp from "../messenger/MessengerApp";

class GameBody extends Component {
    render() {
        return (
            <div>
                <div className="row cont">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-header">
                                Panel Heading
                        </div>
                            <div className="card-body">
                                Panel Content
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-header">
                                Game
                            </div>
                            <div className="card-body col-md-12 embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="http://funkypotato.com/gamez/bunny-goes-boom/index.html"></iframe>
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

            </div >
        );
    }
}

export default GameBody;