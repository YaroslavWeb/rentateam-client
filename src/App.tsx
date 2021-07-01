import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { IAddressFormik } from "interfaces/formik";
import { ICategory } from "interfaces/category";
import { IStore } from "interfaces/store";
import { postCart, getCategories } from "services";
import { toggleOrderOption } from "store/ui/actions";
import { AppNavbar } from "components/app-navbar";
import { AppFooter } from "components/app-footer";
import { AppSwitch } from "components/app-switch";
import { CategoriesBar } from "components/categories-bar";
import { ProductCard } from "components/product-card";
import { InputText } from "components/input-text";
import { Divider, Title1, Title2 } from "styles/components";
import {
  Container,
  TopSection,
  Address,
  AddressItem,
  CategorySection,
  CategoryWrapper,
} from "styles/app";

const orderOptions: [string, string] = ["Доставка", "Самовывоз"];

function App() {
  const dispatch = useDispatch();
  const { ui, cart } = useSelector<IStore, IStore>((state) => state);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const initialValuesAddresss: IAddressFormik = {
    street: "",
    house: "",
  };

  const onSumbmitAddress = useCallback(
    async (values: IAddressFormik) => {
      const result = await postCart(cart);
      console.log(result);
    },
    [cart]
  );

  const validationSchemaAddress = Yup.object({
    street: Yup.string().trim().required('Заполните поле "Адрес"'),
    house: Yup.string().trim().required('Заполните поле "Дом"'),
  });

  const formikAddress = useFormik({
    initialValues: initialValuesAddresss,
    onSubmit: onSumbmitAddress,
    validationSchema: validationSchemaAddress,
  });

  const onChangeOrderType = useCallback(
    (activeOption: string) => {
      dispatch(toggleOrderOption(orderOptions[0] === activeOption));
    },
    [dispatch]
  );

  useEffect(() => {
    const getData = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    getData();
  }, []);

  return (
    <>
      <AppNavbar onClick={formikAddress.submitForm} />
      <Container>
        <TopSection>
          <Title1>Доставка г. Москва</Title1>
          <AppSwitch
            activeValue={ui.isDelivery}
            options={orderOptions}
            onChange={onChangeOrderType}
          />
          {ui.isDelivery && (
            <Address>
              <AddressItem>
                <Title2>Улица</Title2>
                <InputText
                  {...formikAddress.getFieldProps("street")}
                  placeholder="Ленина"
                  error={
                    formikAddress.errors.street && formikAddress.touched.street
                      ? formikAddress.errors.street
                      : null
                  }
                />
              </AddressItem>
              <AddressItem>
                <Title2>Дом</Title2>
                <InputText
                  {...formikAddress.getFieldProps("house")}
                  placeholder="59"
                  error={
                    formikAddress.errors.house && formikAddress.touched.house
                      ? formikAddress.errors.house
                      : null
                  }
                />
              </AddressItem>
            </Address>
          )}
        </TopSection>
        {categories ? (
          <CategoriesBar categories={categories} />
        ) : (
          <span>Загрузочка</span>
        )}
        {categories ? (
          categories.map((category, idx) => (
            <CategorySection
              key={category.id}
              id={`cat-${category.id}`}
              isEven={!!(idx % 2)}
              isLast={idx + 1 === categories.length}
            >
              <Title2>{category.name}</Title2>
              <Divider height={32} />
              <CategoryWrapper>
                {category.products
                  .filter((product) =>
                    ui.isDelivery ? ui.isDelivery === product.delivery : true
                  )
                  .map((product, jdx) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      productIndex={jdx}
                      categoryIndex={idx}
                    />
                  ))}
              </CategoryWrapper>
            </CategorySection>
          ))
        ) : (
          <span>Загрузочка</span>
        )}
      </Container>
      <AppFooter />
    </>
  );
}

export default App;
