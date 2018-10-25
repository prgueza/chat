
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => (
  <div className="app">
    <div className="content">
      <h1>MEAN Boilerplate</h1>
      <h2>
        <FontAwesomeIcon icon={['fab', 'node-js']} className="mr-3" />
          Node.js
      </h2>
      <h2>
        <FontAwesomeIcon icon={['fab', 'react']} className="mr-3" />
          React.js
      </h2>
    </div>
    <div className="links">
      <button type="button" className="btn">
        <FontAwesomeIcon icon={['fab', 'github']} className="mr-2" />
          Github
      </button>
      <button type="button" className="btn">
        <FontAwesomeIcon icon={['fab', 'bitbucket']} className="mr-2" />
          Bitbucket
      </button>
    </div>
  </div>
);
export default App;
