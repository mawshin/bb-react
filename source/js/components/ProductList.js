import React from 'react';

import { BrowserRouter, HashRouter, Route, Router, Switch, Link } from 'react-router-dom'

import classnames from 'classnames/bind';

// import moment from 'moment';

// Using CSS Modules so we assign the styles to a variable
import s from '../../css/dashboard.scss';
const cx = classnames.bind(s);

export default class ProductList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      
    }
  }

  componentWillMount() {
    
  }


  componentDidMount(){
  }

  _sampleFunction = () => {

  }

  render() {

    return (
      <div className="c-header">
        <div className="o-container">
          <div className="o-row">
            <div className="o-col--12">
              <h5>All products</h5>
            </div>
          </div>

          <div className="o-row">
            <div className="o-col--6">
              24 products
            </div>
            <div className="o-col--6">
              <div className="u-text--right">
                <select>
                  <option value="8">8 per page</option>
                  <option value="16">16 per page</option>
                  <option value="24">24 per page</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
