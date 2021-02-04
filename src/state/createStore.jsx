import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  if (action.type === `ADD_TO_CART`) {
    var stateToApply = {itemsInCart: {...state.itemsInCart}};
    if(state.itemsInCart[action.item.itemId])
    {
      stateToApply.itemsInCart[action.item.itemId]= {itemId: action.item.itemId, quantity: state.itemsInCart[action.item.itemId].quantity + 1, imagePath: action.item.imagePath, title: action.item.title };
    }
    else{
      stateToApply.itemsInCart[action.item.itemId]= {itemId: action.item.itemId, quantity: 1, imagePath: action.item.imagePath, title: action.item.title};
    }

    return Object.assign({}, state, stateToApply
    )
  }
  return state
}

const initialState = { itemsInCart: {} }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
