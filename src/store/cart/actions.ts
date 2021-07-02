import { IProduct } from "interfaces/product";

export enum CartAction {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CLEAR_CART = "CLEAR_CART",
}

export const addToCart = (product: IProduct) => ({
  type: CartAction.ADD_PRODUCT,
  payload: product,
});

export const removeFromCart = (product: IProduct) => ({
  type: CartAction.REMOVE_PRODUCT,
  payload: product,
});

export const clearCart = () => ({
  type: CartAction.CLEAR_CART,
});
