import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormikProps } from "formik";

import { ICategory } from "interfaces/category";
import { IStore } from "interfaces/store";
import { getCategories } from "services";
import { toggleOrderOption } from "store/ui/actions";
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
} from "styles/main";
import { IAddressFormik } from "interfaces/formik";

const orderOptions: [string, string] = ["Доставка", "Самовывоз"];

interface MainProps {
  formik: FormikProps<IAddressFormik>;
}

export function Main({ formik }: MainProps) {
  const dispatch = useDispatch();
  const { ui } = useSelector<IStore, IStore>((state) => state);
  const [categories, setCategories] = useState<ICategory[]>([]);

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
                {...formik.getFieldProps("street")}
                placeholder="Ленина"
                error={
                  formik.errors.street && formik.touched.street
                    ? formik.errors.street
                    : null
                }
              />
            </AddressItem>
            <AddressItem>
              <Title2>Дом</Title2>
              <InputText
                {...formik.getFieldProps("house")}
                placeholder="59"
                error={
                  formik.errors.house && formik.touched.house
                    ? formik.errors.house
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
  );
}
