import { UIAction } from "./actions";
import { IUIState, IAction } from "interfaces/store";

const initialState: IUIState = {
  isCategoryBarSticky: false,
  isDelivery: true,
};

export const uiReducer = (
  state = initialState,
  { type, payload }: IAction<boolean>
) => {
  switch (type) {
    case UIAction.SET_STICKY_BAR:
      return {
        ...state,
        isCategoryBarSticky: true,
      };
    case UIAction.UNSET_STICKY_BAR:
      return {
        ...state,
        isCategoryBarSticky: false,
      };
    case UIAction.TOGGLE_ORDER_OPTION:
      return {
        ...state,
        isDelivery: payload,
      };
    default:
      return state;
  }
};
