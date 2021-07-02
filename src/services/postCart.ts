import { ICartState } from "interfaces/store";

export const postCart = async (cart: ICartState) => {
  let path = "";
  if (process.env.NODE_ENV === "production") {
    path += process.env.REACT_APP_URL_PROD;
  } else {
    path += process.env.REACT_APP_URL_DEV;
  }
  path += "cart/";

  const req = await fetch(path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  });
  const res = await req.json();

  return res;
};
