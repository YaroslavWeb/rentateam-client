export enum UIAction {
  SET_STICKY_BAR = "SET_STICKY_BAR",
  UNSET_STICKY_BAR = "UNSET_STICKY_BAR",
  TOGGLE_ORDER_OPTION = "TOGGLE_ORDER_OPTION",
}

export const setStickyBar = () => ({
  type: UIAction.SET_STICKY_BAR,
});

export const unsetStickyBar = () => ({
  type: UIAction.UNSET_STICKY_BAR,
});

export const toggleOrderOption = (isDelivery: boolean) => ({
  type: UIAction.TOGGLE_ORDER_OPTION,
  payload: isDelivery,
});
