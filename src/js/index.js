import './../styles/common.css';
import './../styles/index.less';
// import './../images/one.jpg';

import React from 'react';
import { render } from 'react-dom';
import Hello from './components/hello'; // eslint-disable-line
console.log(React.version) // eslint-disable-line
render( <Hello name="my react test"/> , document.getElementById('root'));
