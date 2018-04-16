import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Router, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import reducer from './reducers';


import Store from './store';
import App from './containers/app'

//import stylesheets here?

let StoreInstance = Store();

ReactDOM.render((
    <Provider store={StoreInstance}>
        <BrowserRouter>
          <App store={StoreInstance} />
        </BrowserRouter>
    </Provider>
), document.getElementById('pageApplication'))
