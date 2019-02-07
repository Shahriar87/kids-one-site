import React from 'react';

import Message from './Message';

// This is the main display of the application. It shows a list of all the
// messages which have been sent and received during the current chat session.
class Messages extends React.Component {

  componentDidUpdate() {
    // get the messagelist container and set the scrollTop to the height of the container
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    // Here we should loop through each message and
    // pass it to the Message component
    // Loop through all the messages in the state and create a Message component
    const messages = this.props.messages.map((message, i) => {
      return (
        <Message
          key={i}
          username={message.username}
          message={message.message}
          fromMe={message.fromMe} />
      );
    });

    return (
      <div className='messages' id='messageList'>
        {messages}
      </div>
    );
  }
}


Messages.defaultProps = {
};

export default Messages;
