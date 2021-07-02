export const getCategories = async () => {
  let path = "";
  console.log(process.env);
  if (process.env.NODE_ENV === "development") {
    path += process.env.REACT_APP_URL_DEV;
  } else {
    path += process.env.PROD_SERVER_URL;
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
