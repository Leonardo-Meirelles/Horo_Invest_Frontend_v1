import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers.js';
import './config/starter';
import GlobalStyle from './assets/globalStyled';
import Toast from './plugins/toast';

ReactDOM.render(
  <React.Fragment>
    <Routers />
    <GlobalStyle />
    <Toast />
  </React.Fragment>,
  document.getElementById('root')
);

