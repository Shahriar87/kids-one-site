import React from 'react';

// This component displays an individual message.
// We should have logic to display it on the right if the user sent the
// message, or on the left if it was received from someone else.
class Message extends React.Component {
  render() {
    // Display the message text and sender's name

    // Was the message sent by the current user. If so, add a css class
    const fromMe = this.props.fromMe ? 'from-me' : '';
    return (
      <div className={`message ${fromMe}`}>
        <div className='username'>
          {this.props.username}
        </div>
        <div className='message-body'>
          {this.props.message}
        </div>
      </div>
    );
  }
}

Message.defaultProps = {
};

export default Message;
