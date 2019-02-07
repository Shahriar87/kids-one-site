// ----- VideoBody component
import React, { Component } from "react";
import Coverflow from 'react-coverflow';


var fn = function () {
    /* do you want */
}

class VideoCoverflow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 0
        };
    }

    render() {
        return (
            <div>
                <Coverflow
                    width={960}
                    height={480}
                    displayQuantityOfSide={2}
                    navigation={true}
                    enableHeading={false}
                    active={this.state.active}
                >
                    <div
                        onClick={() => fn()}
                        onKeyDown={() => fn()}
                        role="menuitem"
                        tabIndex="0"
                    >
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title="video" width="200%" height="auto" src="https://www.youtube.com/embed/sNoWAz6bia8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen">
                            </iframe>
                        </div>
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="video" width="200%" height="auto" src="https://www.youtube.com/embed/uhHmR7zlGbg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen">
                        </iframe>
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="video" width="200%" height="auto" src="https://www.youtube.com/embed/XqZsoesa55w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen">
                        </iframe>
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="video" width="200%" height="auto" src="https://www.youtube.com/embed/H7FUoV7R_w4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen">
                        </iframe>
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="video" width="200%" height="auto" src="https://www.youtube.com/embed/XnqGFn0Byg4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen">
                        </iframe>
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="video" width="200%" height="auto" src="https://www.youtube.com/embed/edr2aL9Mjys" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen">
                        </iframe>
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="video" width="200%" height="auto" src="https://www.youtube.com/embed/a27Q0LlNZSk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen">
                        </iframe>
                    </div>


                    {/* <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc" />
                    <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/" />
                    <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com" />
                    <img src='images/album-5.png' alt='Album five' data-action="http://www.bbc.co.uk" />
                    <img src='images/album-6.png' alt='Album six' data-action="https://medium.com" />
                    <img src='images/album-7.png' alt='Album seven' data-action="http://www.google.com" />
                    <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/" />
                    <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc" />
                    <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/" />
                    <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com" /> */}
                </Coverflow>
                <button onClick={this._handleClick.bind(this)}>Random</button>
            </div>
        );
    }

    _handleClick() {
        var num = Math.floor((Math.random() * 10) + 1);
        this.setState({
            active: num
        });
    }
};

export default VideoCoverflow;