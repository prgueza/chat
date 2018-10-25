import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import App from './js/app';

library.add(fab);

ReactDOM.render(<App />, document.getElementById('root'));
