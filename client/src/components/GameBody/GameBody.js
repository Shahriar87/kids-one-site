// -----GameBody component
import React, { Component } from "react";
import { GameApp } from '../Game/GameApp';

class GameBody extends Component {
    render() {
        return (
            <div>
                <div className="row cont">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                Game
                            </div>
                            {/* <div className="card-body col-md-12 embed-responsive embed-responsive-16by9">
                                <iframe title="Game" className="embed-responsive-item" src="https://games.cdn.famobi.com/html5games/s/street-ball-star/v090/?fg_domain=play.famobi.com&fg_aid=A1000-111&fg_uid=c893b0c6-fefb-4218-b63e-97a976d20401&fg_pid=e37ab3ce-88cd-4438-9b9c-a37df5d33736&fg_beat=406&original_ref=https%3A%2F%2Fgames.cdn.famobi.com%2Fhtml5games%2Fs%2Fstreet-ball-star%2Fv090%2F%3Ffg_domain%3Dplay.famobi.com%26fg_aid%3DA1000-111%26fg_uid%3Dc893b0c6-fefb-4218-b63e-97a976d20401%26fg_pid%3De37ab3ce-88cd-4438-9b9c-a37df5d33736%26fg_beat%3D388%26original_ref%3Dhttps%253A%252F%252Fplay.famobi.com%252Fhtml5game%252Fc893b0c6-fefb-4218-b63e-97a976d20401%252FA1000-11"></iframe>
                            </div> */}

                            <div className="card-body">
                                <GameApp />
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