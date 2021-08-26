import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers.js';
import './config/starter';
// import GlobalStyle from './assets/globalStyled';

ReactDOM.render(
  <React.Fragment>
    <Routers />
  </React.Fragment>,
  document.getElementById('root')
);

