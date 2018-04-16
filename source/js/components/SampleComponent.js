import React from 'react';

import { BrowserRouter, HashRouter, Route, Router, Switch, Link } from 'react-router-dom'

import classnames from 'classnames/bind';

// import moment from 'moment';

// Using CSS Modules so we assign the styles to a variable
import s from '../../css/dashboard.scss';
const cx = classnames.bind(s);

export default class SampleComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    }
  }
  
  componentDidMount(){

  }

  _sampleFunction = () => {

  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
