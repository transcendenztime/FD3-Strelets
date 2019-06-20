import {  PROD_FILTER } from './prodFilterAC';

const initState={
    prodFilter: '',
}


function prodFilterReducer(state = initState, action) {
  switch (action.type) {
    
    case PROD_FILTER: {
            
      let newState = {...state,
        prodFilter: action.name};
        console.log(action.name)
      return newState;
      
    }    
    
    default:
      return state;
  }
}

export default prodFilterReducer;
