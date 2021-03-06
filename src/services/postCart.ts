import { ICartState } from "interfaces/store";

export const postCart = async (cart: ICartState) => {
  const path = "https://rentateam-server-test.herokuapp.com/cart/";

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
