import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import App from './js/app';

library.add(faCircle, faPaperPlane);

ReactDOM.render(<App />, document.getElementById('root'));
