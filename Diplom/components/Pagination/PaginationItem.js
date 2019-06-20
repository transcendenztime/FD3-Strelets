"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { page_change } from "../../redux/pageAC";

class PaginationItem extends React.Component {
  
  static propTypes = { 
    num: PropTypes.number.isRequired, //передан из родительского компонента
    startLink: PropTypes.string.isRequired, //передан из родительского компонента
    page: PropTypes.object.isRequired,
  };


  changePage = () => {
    this.props.dispatch( page_change(this.props.num) );
  }
  
  render() {
    
    return (
        <li className = "pagination-item">
          <NavLink to = {this.props.num != 1 ? 
              this.props.startLink + '/' + this.props.num + "page" : this.props.startLink} onClick = {this.changePage}
              className = {this.props.num == this.props.page.page ? "activePage" : null}>
            {this.props.num}
          </NavLink>
        </li>          
    );

  }

}
   
const mapStateToProps = function (state) {
    return {    
      page: state.page,
    };
  };
  
  export default connect(mapStateToProps)(PaginationItem);