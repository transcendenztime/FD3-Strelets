import { combineReducers } from 'redux';

import productsListReducer from "./productsListReducer";
import cartReducer from "./cartReducer";
import selectedProductsReducer from "./selectedProductsReducer";
import pageReducer from "./pageReducer";
import prodFilterReducer from "./prodFilterReducer";

let combinedReducer = combineReducers({
    products: productsListReducer,
    cart: cartReducer, 
    selectedProducts: selectedProductsReducer,
    page: pageReducer,
    prodFilter: prodFilterReducer,
});

export default combinedReducer;
