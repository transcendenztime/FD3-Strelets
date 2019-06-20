import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import isoFetch from 'isomorphic-fetch';

import {connect} from 'react-redux';
import { productsLoadingAC, productsErrorAC, productsSetAC } from "../redux/productsAC";
import { page_change } from "../redux/pageAC";

import { convertLink } from '../services/LinkConverter';

import PaginationPage from '../components/Pagination/PaginationPage';

class PageCategory extends React.PureComponent {
         
  static propTypes = {
    products: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    page: PropTypes.number,//from Controller2
  };

  
  componentDidMount() {

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

        if(this.props.page)//если page пришла из контроллера, заменим ее в редьюсере        
          this.props.dispatch( page_change(this.props.page) );//если нету, то по умолчанию оставим - 1

  }
  

  render() {

    if ( this.props.products.status <= 1 )
      return "загрузка...";

    if ( this.props.products.status === 2 )
      return "ошибка загрузки данных";

    if ( this.props.products.status === 3 ) {

      let link = convertLink(this.props.category);

      let prodData = this.props.products.productsList.filter( prod => prod.category == link );
      let l = prodData.length;

      return (
        <div className = "catalogue page">
                    
          <div className = "breadcrumbs-container">
            <NavLink to="/" exact className="breadcrumbs">Главная </NavLink>
            <span className="breadcrumbs-arr" > &rarr; </span>
            <NavLink to="/catalogue" className="breadcrumbs">Каталог</NavLink>
            <span className="breadcrumbs-arr" > &rarr; </span>
            <NavLink to={"/catalogue/" + this.props.category} className="breadcrumbs">
              {link}
            </NavLink>
          </div>
          <hr />

          {l > 0 ? 
            <PaginationPage products = {prodData} startLink = {'/catalogue/' + this.props.category} pagesQty = {1} /> : 
            <span>нет продуктов данной категории</span>}

        </div>
      );
    
      }   
  }

}
      
const mapStateToProps = function (state) {
  return {    
    products: state.products,
  };
};

export default connect(mapStateToProps)(PageCategory);