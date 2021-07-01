import { createStore, combineReducers } from "redux";
import { cartReducer } from "./cart/reducer";
import { uiReducer } from "./ui/reducer";

const reducers = combineReducers({
  cart: cartReducer,
  ui: uiReducer,
});

export default createStore(reducers);
