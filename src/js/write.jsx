import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Write = () => (
  <div className="flex flex-no-grow bg-white rounded my-2 h-12 relative">
    <div className="flex-grow h-full align-middle">
      <input className="w-full h-full p-6 pr-16 appearance-none border-2 border-white rounded w-full py-2 px-4 leading-tight focus:outline-none focus:border-teal" />
    </div>
    <div className="absolute pin-r w-16 align-middle self-center text-teal text-center">
      <FontAwesomeIcon className="text-xl" icon="paper-plane" />
    </div>
  </div>
);

export default Write;
