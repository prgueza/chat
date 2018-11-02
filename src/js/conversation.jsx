import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';
import Write from './write';

const Conversation = ({ messages }) => {
  const conversationMessages = messages.map(message => <Message message={message} />);
  return (
    <div className="conversation">
      <div className="conversation-content">
        { conversationMessages }
        <div className="message message-self">
          <p className="message-content">
            Esto es un mensaje que he escrito yo.
            <span className="message-timestamp">12:56</span>
          </p>
        </div>
      </div>
      <Write />
    </div>
  );
};

Conversation.propTypes = {
  messages: PropTypes.shape.isRequired,
};

export default Conversation;
