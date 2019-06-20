import { PRODUCTS_LOADING, PRODUCTS_ERROR, PRODUCTS_SET } from './productsAC';

const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  productsList: null,

}

function productsListReducer(state = initState, action) {
  switch (action.type) {

    case PRODUCTS_LOADING: {
      let newState = {
        status: 1,
        productsList: null,
      };
      return newState;
    }

    case PRODUCTS_ERROR: {
      let newState = {
        status: 2,
        productsList: null,
      };
      return newState;
    }

    case PRODUCTS_SET: {
      let newState = {
        status: 3,
        productsList: action.products,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default productsListReducer;