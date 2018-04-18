import React from 'react';

import { BrowserRouter, HashRouter, Route, Router, Switch, Link } from 'react-router-dom'

import classnames from 'classnames/bind';

// import Pagination from '../components/Pagination';

import ReactPaginate from 'react-paginate';

// Using CSS Modules so we assign the styles to a variable
import s from '../../css/dashboard.scss';
const cx = classnames.bind(s);

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [],
      pageSize: parseInt(this.props.pageSize),
      page: 1,
      totalPages: 0,
      data: [],
      offset: 0
    }
  }

  componentWillMount() {
    
  }

  componentWillReceiveProps(newProps) {
    if( newProps.pageSize !== this.props.pageSize ) {
      this._getProductsFunction();
    }
  }

  componentDidMount() {
    this._getProductsFunction();
  }

  _handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.pageSize);

    console.log(selected);
    console.log(offset);

    this.setState({offset: offset}, () => {
      this._getProductsFunction();
    });
  };

  _getProductsFunction = () => {
    fetch('https://raw.githubusercontent.com/BookingBoss/reactjs-test/master/productsData.json')
    .then(results => {
        return results.json();
      }).then(data => {
        this.setState({totalPages: Object.keys(data).length});

        this.setState({data: data, pageCount: Math.ceil(this.state.totalPages / this.props.pageSize)});

        let startCount = this.state.offset;
        let endCount = parseInt(this.props.pageSize) + this.state.offset;
        
        let pictures = [];
        
        for(let i = startCount; i < endCount; i++) {
          console.log(data[i]);
          
          pictures.push(
            <div className="o-col--3" key={data[i].id}>
              <div className="c-products--thumb">
                <div>{data[i].id}</div>
                <img className="img-responsive" src={data[i].product_image} />
              </div>
            </div>
          );

          this.setState({pictures: pictures});
        }

        // let pictures = data.map((pic, index) => {

        //   let startCount = index + this.state.offset;
        //   let endCount = parseInt(this.props.pageSize) + this.state.offset;

        //   console.log(startCount);
        //   console.log(endCount);
        //   if(startCount < endCount) {
        //     return (
        //       <div className="o-col--3" key={pic.id}>
        //         <div className="c-products--thumb">
        //           <div>{pic.id}</div>
        //           <img className="img-responsive" src={pic.product_image} />
        //         </div>
        //       </div>
        //     )
        //   }

        // })
      // this.setState({pictures: pictures});
    });
  }

  render() {

    return (
      
      <div className="c-products">
        <div className="o-container">
          <div className="o-row">
              {this.state.pictures}
          </div>
          <div className="o-row">
          {this.state.offset}
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<a href="">...</a>}
                           breakClassName={"break-me"}
                           pageCount={this.state.pageCount}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           onPageChange={this._handlePageClick}
                           containerClassName={"pagination"}
                           subContainerClassName={"pages pagination"}
                           activeClassName={"active"} />
          </div>
        </div>
      </div>

      /*https://stackoverflow.com/questions/46426078/reactjs-passing-state-value-from-one-component-to-another?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
      https://www.peterbe.com/plog/onchange-in-reactjs
      https://thinkster.io/tutorials/react-change-state-from-input
      */
    );
  }
}
