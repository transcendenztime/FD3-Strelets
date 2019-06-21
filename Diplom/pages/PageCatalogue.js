"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { productsLoadingAC, productsErrorAC, productsSetAC } from "../redux/productsAC";
import { page_change } from "../redux/pageAC";
import { prod_filter } from "../redux/prodFilterAC";

import isoFetch from 'isomorphic-fetch';

import PaginationPage from '../components/Pagination/PaginationPage';

class PageCatalogue extends React.PureComponent {
  
  static propTypes = {
    products: PropTypes.object.isRequired,// получаем из redux
    prodFilter: PropTypes.object.isRequired,
    page: PropTypes.number,//из Controller
  };

  componentDidMount() {

    if(this.props.page)//если page пришла из контроллера, заменим ее в редьюсере        
      this.props.dispatch( page_change(this.props.page) );//если нету, то по умолчанию оставим - 1
      
    if(!this.props.products.productsList){

      this.props.dispatch( productsLoadingAC() ); // переводим раздел products стора в состояние "загружается"

      isoFetch("../products.json")
        .then( (response) => { // response - HTTP-ответ
          if (!response.ok) {
            let Err = new Error("fetch error " + response.status);
            Err.userMessage = "Ошибка связи";
            throw Err;
          }
          else
            return response.json();
        })
        .then( (data) => {
          this.props.dispatch( productsSetAC(data) ); // переводим раздел products стора в состояние "данные загружены"
        })
        .catch( (error) => {
          console.error(error);
            this.props.dispatch( productsErrorAC() ); // переводим раздел products стора в состояние "ошибка"
        });
    } 
  }

  componentWillUnmount() {
    this.props.dispatch( prod_filter('') );  
  }

          
  render() {

    if ( this.props.products.status <= 1 )
      return "загрузка...";

    if ( this.props.products.status === 2 )
      return "ошибка загрузки данных";

    if ( this.props.products.status === 3 ) {
           
      let filterProductsList = this.props.products.productsList.filter( v => v.name.indexOf(this.props.prodFilter.prodFilter) != -1 );
      
      return (
        <div>
          
          <div className = "breadcrumbs-container">
            <NavLink to="/" exact className="breadcrumbs">Главная </NavLink>
            <span className="breadcrumbs-arr" > &rarr; </span>
            <NavLink to="/catalogue" className="breadcrumbs">Каталог</NavLink>
          </div>
          <hr />
          {this.props.prodFilter.prodFilter ? <h2 className="page-title">Результаты поиска</h2> : null}

          {filterProductsList.length > 0 ?
            <PaginationPage products = {filterProductsList}  startLink = {'/catalogue'}
             pagesQty = {this.props.prodFilter.prodFilter !== '' ? 0: 1}/>
            :<span>Поиск не дал результатов</span>
          }
        </div>
      );
    
      } 
    
  }

}
   
const mapStateToProps = function (state) {
  return {    
    products: state.products,
    prodFilter: state.prodFilter,
  };
};

export default connect(mapStateToProps)(PageCatalogue);