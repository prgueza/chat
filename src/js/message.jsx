import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message: { text, author, timestamp } }) => (
  <div className="message message-else">
    <p className="message-content">
      <p className="message-author">{ author }</p>
      <p>{ text }</p>
      <span className="message-timestamp">{ timestamp }</span>
    </p>
  </div>
);

Message.propTypes = {
  message: PropTypes.shape.isRequired,
};

export default Message;
