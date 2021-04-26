import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import AppExa from './AppExample';
// import VideoBoot from './VideoBoot'
// import Mce from './MceTiny'
import ScanCode from './scanCode'
import Wx from './Wxsdk'
// import Error from './error/Error'


import store from './redux/store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <Wx /> */}
  </Provider>,
  document.getElementById('root')
);


