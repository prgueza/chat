import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Write = () => (
  <div className="write">
    <div className="write-input-container">
      <input className="write-input" />
    </div>
    <div className="write-icon-container">
      <FontAwesomeIcon className="write-icon" icon="paper-plane" />
    </div>
  </div>
);

export default Write;
