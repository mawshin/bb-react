import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions/app';
import * as pageActions from '../actions/home';

import axios from 'axios';

import classnames from 'classnames/bind';

import s from '../../css/dashboard.scss';
const cx = classnames.bind(s);

import HeaderBar from '../components/Header';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';

////

class PageDashboard extends Component {

  constructor(props, context) {
    super(props, context);

      this.state = {
        page: 1,
      };
  }

  componentDidMount(){
  }

  _sampleFunction = (e) => {

  }


  render() {
    return (
      <div className={cx('page')}>
        <HeaderBar/>
        <ProductList/>
        <Pagination/>
        <div className={cx('clear')}></div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        app: state.app,
        page: state.page
    };
}
function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch),
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageDashboard);
