import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  if (action.type === `ADD_TO_CART`) {
    var stateToApply = {itemsInCart: {...state.itemsInCart}};
    if(state.itemsInCart[action.itemId])
    {
      stateToApply.itemsInCart[action.itemId]= {itemId: action.itemId, quantity: state.itemsInCart[action.itemId].quantity + 1, imagePath: action.imagePath};
    }
    else{
      stateToApply.itemsInCart[action.itemId]= {itemId: action.itemId, quantity: 1, imagePath: action.imagePath};
    }

    return Object.assign({}, state, stateToApply
    )
  }
  return state
}

const initialState = { itemsInCart: {} }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
