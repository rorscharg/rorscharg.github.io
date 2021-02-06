import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  if (action.type === `ADD_TO_CART`) {
    var stateToApply = { itemsInCart: { ...state.itemsInCart } };
    if (state.itemsInCart[action.item.itemId]) {
      stateToApply.itemsInCart[action.item.itemId] = { itemId: action.item.itemId, quantity: state.itemsInCart[action.item.itemId].quantity + 1, imagePath: action.item.imagePath, title: action.item.title, price: action.item.price };
    }
    else {
      stateToApply.itemsInCart[action.item.itemId] = { itemId: action.item.itemId, quantity: 1, imagePath: action.item.imagePath, title: action.item.title, price: action.item.price };
    }

    state = Object.assign({}, state, stateToApply)
  }
  else if (action.type === `MODIFY_ITEM_QUANTITY`) {
    debugger;
    var quantity = parseInt(action.quantity)
    var itemId = action.item.itemId

    var stateToApply = { itemsInCart: { ...state.itemsInCart } };

    stateToApply.itemsInCart[itemId] = { itemId: action.item.itemId, quantity: quantity, imagePath: action.item.imagePath, title: action.item.title, price: action.item.price };

    state = Object.assign({}, state, stateToApply);
  }


  // Calculate total
  var price = 0
  Object.keys(state.itemsInCart).map((key) => {
    var item = state.itemsInCart[key];
    price = price + item.price * item.quantity;
  });

  var priceObject = { price };
  state = Object.assign({}, state, priceObject);
  return state
}

const initialState = { itemsInCart: {}, price: 0 }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
