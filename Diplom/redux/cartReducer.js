import {  PROD_ADD, PROD_DEL, CART_CLEAR, QTY_ADD, DELIVERY_CHNG } from './cartAC';

const initState={

  // ключ - идентификатор prod, значение - info
  products: {},
  delivery: 0,  
}


function cartReducer(state = initState, action) {
  switch (action.type) {
    
    case PROD_ADD: {
      let newProdInfo = action.info;
      
      //если в корзине уже есть данный товар, суммируем добавляемое с тем, что есть
      if (state.products[action.prodid]) {
        newProdInfo.qty += state.products[action.prodid].qty;
        newProdInfo.sum += state.products[action.prodid].sum;
      }

      let newState = {...state,
        products: {...state.products,
          [action.prodid]: newProdInfo}};
      return newState;
    }    

    case PROD_DEL: {
      let newState = {...state};
      delete newState.products[action.prodid];
      return newState;
    }    

    case CART_CLEAR: {
      //чистим корзину
      let newState = {...initState};
      return newState;
    }

    case QTY_ADD: {
      //меняем количество единиц товара и общую сумму денег за это количество единиц товара 
      let newState = {...state,
        products: {...state.products,
          [action.prodid]: {...state.products[action.prodid],
            qty: action.newQTY, sum: action.newSum }
        }
      };

      return newState;
    }
    
    case DELIVERY_CHNG: {
      let newState = {...state,
        delivery: action.num};
      return newState;
    } 
    
    default:
      return state;
  }
}

export default cartReducer;
