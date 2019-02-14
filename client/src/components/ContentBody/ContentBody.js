// ----- ContentBody component
import React, { Component } from "react";
import { ActivityApp } from '../Activity/ActivityApp';

const styles = {
    listedItem: {
        textDecoration: "underline",  
    },
};

class ContentBody extends Component {
    render() {
        return (
            <div>
                {/* <h1>Welcome to KidKlub!</h1> */}
                <div className="row cont">
                    <div className="col-sm-4">
                        <div className="card">
                            <div id="school_announcment_header" className="card-header">
                               <p className =""> <span className="kidklub">School Announcements</span> </p>
                            </div>
                            <div id="school_annoucments" className="card-body">
                                <h5 className="card-title">Valentine's Day Party and Boxes</h5>
                                <ul>
                                    <li>First Grade will be celebrating Valentine's Day on Thursday, February 14.&nbsp;</li>
                                    <li>Students are asked to make a Valentine's Day box or bag at home and send it in to school on Valentine's Day.</li>
                                    <li>Students will be having a class party from 10:45-11:45. Please use the links below to sign up to donate either money or an item for the party.&nbsp;.
                                    <ul>
                                            <li><span style={styles.listedItem}><a href="/home" rel="noopener noreferrer">Mrs. Giddings' Valentine's Day Party Link</a></span></li>
                                            <li><span style={styles.listedItem}><a href="/home" rel="noopener noreferrer">Ms. Jelinek's Valentine's Day Party Link</a></span></li>
                                            <li><span style={styles.listedItem}><a href="/home" rel="noopener noreferrer">Mrs. Wennen's Valentine's Day Party Link</a></span></li>
                                            <li><span style={styles.listedItem}><a href="/home" rel="noopener noreferrer">Mrs. Will's Valentine's Day Party Link</a></span></li>
                                        </ul>
                                    </li>
                                </ul>
                                <p><span>If your child is bringing in valentines to pass out to classmates, please have&nbsp;him/her sign his/her name only,&nbsp;leaving&nbsp;the "To" section on the valentine blank. This will help expedite passing out the valentines on the day of the party.&nbsp;&nbsp;</span></p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div >
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-header">
                                <span className="kidklub">DIY and Interesting Activites</span>
                            </div>
                            <div className="card-body">
                                <ActivityApp />
                            </div>
                        </div>
                    </div>
                </div >

            </div >
        );
    }
}

export default ContentBody;