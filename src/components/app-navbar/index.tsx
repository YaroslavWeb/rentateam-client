import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { IStore } from "interfaces/store";
import {
  Navbar,
  NavbarCart,
  NavbarCartPrice,
  BasketIcon,
  NavbarCartCount,
  NavbarDecoration,
  NavbarMenu,
} from "./styles";

interface AppNavbarProps {
  onClick: () => void;
}

export function AppNavbar({ onClick }: AppNavbarProps) {
  const { cart, ui } = useSelector<IStore, IStore>((state) => state);

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar isSticky={isSticky && !ui.isCategoryBarSticky}>
      <NavbarMenu />
      <NavbarCart onClick={onClick}>
        <NavbarCartPrice>{cart.totalPrice} ₽</NavbarCartPrice>
        <BasketIcon />
        {!!cart.totalCount && (
          <NavbarCartCount>{cart.totalCount}</NavbarCartCount>
        )}
      </NavbarCart>
      <NavbarDecoration />
    </Navbar>
  );
}
