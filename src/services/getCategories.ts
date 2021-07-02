export const getCategories = async () => {
  const path = "https://rentateam-server-test.herokuapp.com/categories/";

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
