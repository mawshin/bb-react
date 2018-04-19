import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Router, Switch, Redirect, Link } from 'react-router-dom';

import axios from 'axios';

import classnames from 'classnames/bind';

// Using CSS Modules so we assign the styles to a variable
import s from '../../css/dashboard.scss';
const cx = classnames.bind(s);

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions/app';

import PageIndex from './route-index';
import PageDashboard from './route-dashboard';

const EmptyLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <div>
        <Component {...props} />
      </div>
    )} />
  )
};

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state={
      authed: true
    }
  }
  componentDidUpdate() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className={cx('App')}>

        <Switch>
          <Route exact path='/' component={PageIndex}/>
          <Route path='/dashboard' component={PageDashboard} myprop="user"/>
        </Switch>

      </div>
    )
  }
}

const NotFound = () => (<h1>404.. This page is not found!</h1>)

export default App
