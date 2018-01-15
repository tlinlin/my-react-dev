import './../styles/common.css';
import './../styles/index.less';
// import './../images/one.jpg';

import React from 'react';
import { render } from 'react-dom';
import RouterConfig from './routers/router';
console.log(React.version) // eslint-disable-line
render( <RouterConfig/> , document.getElementById('root'));
