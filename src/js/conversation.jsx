import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';
import Write from './write';

const Conversation = ({ messages }) => {
  const conversationMessages = messages.map(message => <Message message={message} />);
  return (
    <div className="conversation w-2/3 bg-grey-lighter flex flex-col py-2 px-4">
      <div className="bg-white flex-grow shadow-inner rounded my-2 px-6 py-3 overflow-y-scroll">
        { conversationMessages }
        <div className="flex flex-row-reverse my-2">
          <p className="relative bg-teal text-white rounded border border-teal shadow max-w-2/3 pl-4 py-2 pr-12 mr-2">
            Esto es un mensaje que he escrito yo.
            <span className="font-hairline text-white text-xxs absolute pin-b pin-r mb-1 mr-2">12:56</span>
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
