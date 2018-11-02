import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Message = ({ message: { text, author, timestamp }, user: { name } }) => {
  const messageClass = name === author ? 'message message-self' : 'message message-else';
  return (
    <div className={messageClass}>
      <div className="message-content">
        { name === author
          || <p className="message-author">{ author }</p>
        }
        <p>{ text }</p>
        <span className="message-timestamp">{ moment(timestamp).format('hh:mm') }</span>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string,
    author: PropTypes.string,
    timestamp: PropTypes.string,
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    connected: PropTypes.bool,
  }),
};

Message.defaultProps = {
  message: null,
  user: null,
};

export default Message;
