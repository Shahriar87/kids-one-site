import React from 'react';
import ChatApp from './ChatApp';

require('./styles/MessengerApp.css');
require('./styles/Login.css');

// This is the first screen seen by the user. We should display some way for
// them to enter their name and enter the chat room
class MessengerApp extends React.Component {
  constructor(props) {
    super(props);
    // set the initial state of the application
    this.state = {
      username: this.props.userName,
      profilePic: this.props.profilePic
    };

    // bind the 'this' keyword to the event handlers
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);

    // console.log(this.state.username)

  }


  usernameChangeHandler(event) {
    this.setState({
      username: this.state.username,
      profilePic: this.state.profilePic
    });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({
      submitted: true,
      username: this.uName.value,
      profilePic: this.pPic.value
    });
    console.log(this.pPic.value)

  }


  render() {

    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return (
        <ChatApp username={this.state.username} profilePic={this.state.profilePic} />
      );
    }

    // Display a simple login screen with a username field and a submit button
    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h1>Lets Chat with Friends!</h1>
        <div>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            value={this.state.username}
            ref={el => this.uName = el}
            required
            hidden
          />
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            value={this.state.profilePic}
            ref={el => this.pPic = el}
            required
            hidden
          />
        </div>
        <input type="submit" value="Start Chat?" />
      </form>
    );
  }

}
MessengerApp.defaultProps = {
};

export default MessengerApp;
