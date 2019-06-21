import { SUM_QTY, QTY_TO_NULL } from './cartAC';

const initState = {
    
  productsQTY: 0,// количество товаров в корзине
  
}
  
function selectedProductsReducer(state = initState, action) {
  switch (action.type) {

    case SUM_QTY: { 
      let newQTY = state.productsQTY + action.qty;
      let newState = {...state,
        productsQTY:  newQTY};
      return newState;
    }

    case QTY_TO_NULL: { 
      let newQTY = 0;
      let newState = {...state,
        productsQTY:  newQTY};
      return newState;
    }

    default:
      return state;
  }
}
  
  export default selectedProductsReducer;