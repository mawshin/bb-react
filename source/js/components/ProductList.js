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
      pictures: []
    }
  }

  componentWillMount() {
    
  }


  componentDidMount(){
    fetch('https://raw.githubusercontent.com/BookingBoss/reactjs-test/master/productsData.json')
    .then(results => {
      return results.json();
    }).then(data => {
      let pictures = data.map((pic, index) => {
        if(index < 25) {
          return (
            <div className="o-col--3" key={pic.id}>
              <div className="c-products--thumb">
                <img className="img-responsive" src={pic.product_image} />
              </div>
            </div>
          )
        }
      })
      this.setState({pictures: pictures});
      console.log("state", this.state.pictures);
    })
  }

  _sampleFunction = () => {

  }

  render() {

    return (
      <div className="c-products">
        <div className="o-container">
          <div className="o-row">
              {this.state.pictures}
          </div>
        </div>
      </div>
    );
  }
}
