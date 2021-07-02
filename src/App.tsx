import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { IStore } from "interfaces/store";
import { IAddressFormik } from "interfaces/formik";
import { clearCart } from "store/cart/actions";
import { postCart } from "services";
import { Main } from "Main";
import { AppNavbar } from "components/app-navbar";
import { AppFooter } from "components/app-footer";

function App() {
  const dispatch = useDispatch();
  const { cart } = useSelector<IStore, IStore>((state) => state);

  const initialValuesAddresss: IAddressFormik = {
    street: "",
    house: "",
  };

  const onSumbmitAddress = useCallback(async () => {
    const result = await postCart(cart);
    console.log(result);
    dispatch(clearCart());
  }, [cart, dispatch]);

  const validationSchemaAddress = Yup.object({
    street: Yup.string().trim().required('Заполните поле "Адрес"'),
    house: Yup.string().trim().required('Заполните поле "Дом"'),
  });

  const formikAddress = useFormik({
    initialValues: initialValuesAddresss,
    onSubmit: onSumbmitAddress,
    validationSchema: validationSchemaAddress,
  });

  return (
    <>
      <AppNavbar onClick={formikAddress.submitForm} />
      <Main formik={formikAddress} />
      <AppFooter />
    </>
  );
}

export default App;
