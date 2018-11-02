import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';
import Write from './write';

const Conversation = ({ messages, user, sendMessage }) => {
  const conversationMessages = messages.map(message => <Message message={message} user={user} key={message.timestamp} />);
  return (
    <div className="conversation">
      <div className="conversation-content">
        { conversationMessages }
      </div>
      <Write sendMessage={sendMessage} />
    </div>
  );
};

Conversation.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.shape({
    name: PropTypes.string,
    connected: PropTypes.bool,
  }),
  sendMessage: PropTypes.func,
};

Conversation.defaultProps = {
  messages: null,
  user: null,
  sendMessage: null,
};

export default Conversation;
