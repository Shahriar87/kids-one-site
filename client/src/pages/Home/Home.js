import React from "react";
import ContentBody from "../../components/ContentBody/ContentBody";
import GameBody from "../../components/GameBody/GameBody";
import VideoBody from "../../components/VideoBody/VideoBody";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MessengerApp from "../../components/Messenger/MessengerApp";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import "./Home.css"

const styles = {
	img: {
		width: "50%",
		height: "auto"
	},
};


function Home(props) {

    let userName = props.userName
    let profilePic = props.profilePic

    console.log(profilePic);

    return (
        <Router>
            <div>
                <Header />
                    <div className="row cont wrapper">
                        <div className="col-sm-9">
                            <Route exact path="/home" component={ContentBody} />
                            <Route exact path="/video" component={VideoBody} />
                            <Route exact path="/game" component={GameBody} />
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <div className="card-header">
                                   <h5>Messenger</h5> 
                                   <h4><span className="kidklub"><strong>{userName}!</strong></span></h4>
                                   <img className="img-fluid img-thumbnail mx-auto d-block" src={profilePic} alt={userName} />
                                </div>
                                <div className=" no_pad card-body">
                                    <MessengerApp {...props} userName={userName} />
                                </div>
                            </div>
                        </div>
                    </div>            
                <Footer />
            </div>
        </Router >



    );
}

export default Home;