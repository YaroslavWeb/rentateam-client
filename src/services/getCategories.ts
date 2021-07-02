export const getCategories = async () => {
  let path = "";
  if (process.env.NODE_ENV === "production") {
    path += process.env.PROD_SERVER_URL;
  } else {
    path += process.env.REACT_APP_URL_DEV;
  }
  path += "categories/";

  const req = await fetch(path, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = await req.json();

  return res;
};
