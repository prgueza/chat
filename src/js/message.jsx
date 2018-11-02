import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message: { text, author, timestamp } }) => (
  <div className="flex flex-row my-2">
    <p className="relative bg-white rounded border border-teal shadow max-w-2/3 pl-4 py-2 pr-12 mr-2">
      <p className="font-hairline mb-1 text-teal">{ author }</p>
      <p>{ text }</p>
      <span className="font-hairline text-xxs absolute pin-b pin-r mb-1 mr-2">{ timestamp }</span>
    </p>
  </div>
);

Message.propTypes = {
  message: PropTypes.shape.isRequired,
};

export default Message;
