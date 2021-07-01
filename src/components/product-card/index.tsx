import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import placeholderImage from "assets/images/placeholder.png";
import { addToCart, removeFromCart } from "store/cart/actions";
import { IProduct } from "interfaces/product";
import { IStore } from "interfaces/store";
import { Divider } from "styles/components";
import {
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductCounter,
  ProductAction,
  ProductBadge,
  PlusIcon,
} from "./styles";

interface ProductCardProps {
  product: IProduct;
  productIndex: number;
  categoryIndex: number;
}

export function ProductCard({
  product,
  productIndex,
  categoryIndex,
}: ProductCardProps) {
  const dispatch = useDispatch();
  const { cart } = useSelector<IStore, IStore>((state) => state);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  const handleAddToCart = useCallback(
    (product: IProduct) => () => {
      dispatch(addToCart(product));
    },
    [dispatch]
  );

  const handleRemoveFromCart = useCallback(
    (product: IProduct) => () => {
      dispatch(removeFromCart(product));
    },
    [dispatch]
  );

  const getProductCount = useCallback(
    (product: IProduct) => (): number => {
      const element = cart.products.find(
        (item) => item.product.id === product.id
      );
      return element?.count!;
    },
    [cart.products]
  );

  const handleScroll = useCallback(() => {
    cardRef.current &&
      !isVisible &&
      setVisible(cardRef.current.offsetTop - window.scrollY < 500);
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Product ref={cardRef} isEven={!!(categoryIndex % 2)}>
      <ProductImage
        src={
          isVisible
            ? process.env.REACT_APP_STATIC_URL + product.img
            : placeholderImage
        }
      />
      <Divider height={24} />
      <ProductTitle>{product.name}</ProductTitle>
      <Divider height={8} />
      <ProductPrice>{product.price} ₽</ProductPrice>
      {getProductCount(product)() > 0 ? (
        <ProductCounter
          add={handleAddToCart(product)}
          remove={handleRemoveFromCart(product)}
          count={getProductCount(product)}
        />
      ) : (
        <ProductAction onClick={handleAddToCart(product)}>
          <PlusIcon />
        </ProductAction>
      )}
      {productIndex === 0 && <ProductBadge isNew>Новое</ProductBadge>}
      {productIndex === 1 && <ProductBadge isNew={false}>Хит</ProductBadge>}
    </Product>
  );
}
