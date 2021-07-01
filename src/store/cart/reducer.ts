import { CartAction } from "./actions";
import { ICartState, IAction } from "interfaces/store";
import { IProduct } from "interfaces/product";

const initialState: ICartState = {
  products: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartReducer = (
  state = initialState,
  { type, payload }: IAction<IProduct>
) => {
  switch (type) {
    case CartAction.ADD_PRODUCT:
      const isInclude = state.products.find(
        (item) => item.product.id === payload.id
      );
      if (isInclude) {
        const updatedProducts = state.products.map((item) => {
          if (isInclude.product.id === item.product.id) {
            return {
              ...item,
              count: ++item.count,
            };
          }
          return item;
        });
        return {
          ...state,
          products: updatedProducts,
          totalPrice: state.totalPrice + payload.price,
          totalCount: ++state.totalCount,
        };
      } else {
        return {
          ...state,
          products: [...state.products, { count: 1, product: payload }],
          totalPrice: state.totalPrice + payload.price,
          totalCount: ++state.totalCount,
        };
      }
    case CartAction.REMOVE_PRODUCT:
      let updatedProducts = [];
      const removedIdx = state.products.findIndex(
        (item) => item.product.id === payload.id
      );
      if (removedIdx !== -1) {
        if (state.products[removedIdx].count === 1) {
          updatedProducts = state.products.filter(
            (_, idx) => idx !== removedIdx
          );
        } else {
          updatedProducts = state.products.map((item, idx) => {
            return idx === removedIdx ? { ...item, count: --item.count } : item;
          });
        }
        return {
          ...state,
          products: updatedProducts,
          totalPrice: state.totalPrice - payload.price,
          totalCount: --state.totalCount,
        };
      }
      return state;
    default:
      return state;
  }
};
