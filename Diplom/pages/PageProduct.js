import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import isoFetch from 'isomorphic-fetch';

import { productsLoadingAC, productsErrorAC, productsSetAC } from "../redux/productsAC";

import ProdInfoPage from '../components/Catalogue/ProdInfoPage';

class PageProduct extends React.PureComponent {
          
  static propTypes = {
    products: PropTypes.object.isRequired,
    prodId: PropTypes.string.isRequired, //передан из родительского компонента
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

  }

  render() {

    if ( this.props.products.status <= 1 )
      return "загрузка...";

    if ( this.props.products.status === 2 )
      return "ошибка загрузки данных";

    if ( this.props.products.status === 3 ) {

      let prodId = +this.props.prodId;
      let prodData = this.props.products.productsList.find( c => c.id == prodId );

      return (
        <div>
          <ProdInfoPage
          info={prodData}
          />
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

export default connect(mapStateToProps)(PageProduct);
