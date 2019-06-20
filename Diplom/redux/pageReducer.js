import {  PAGE_CHANGE } from './pageAC';

const initState={
    page: 1,
}

function pageReducer(state = initState, action) {
  switch (action.type) {
    
    case PAGE_CHANGE: {
      
      //если страница та же, ничего не делаем
      if (state.page != action.page) {
        let newState = {...state,
          page: action.page};
        return newState;
      } else {return state}
      
    }    
    
    default:
      return state;
  }
}

export default pageReducer;
