import * as actionTypes from '../action/actionTypes';

const orderReducer = (state = {}, action) =>{
  state={
    orderStory:{
      id:0,
      name:'order0'
    }
  };
  switch(action.type){
    case actionTypes.ORDER:
      return Object.assign({},state,{...action});
    default:
      return state;
  }
}  
export default orderReducer;