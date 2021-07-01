import { IProduct } from "./product";

export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IStore {
  cart: ICartState;
  ui: IUIState;
}

export interface ICartState {
  products: IProductInCart[];
  totalCount: number;
  totalPrice: number;
}

export interface IProductInCart {
  count: number;
  product: IProduct;
}

export interface IUIState {
  isCategoryBarSticky: boolean;
  isDelivery: boolean;
}
