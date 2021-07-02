import styled from "styled-components";

import theme from "styles/theme";
import { ReactComponent as MenuSvg } from "assets/svg/menu.svg";
import { ReactComponent as BasketSvg } from "assets/svg/basket.svg";

export const NAVBAR_HEIGHT = 88;

export const Navbar = styled.div<{ isSticky: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: ${NAVBAR_HEIGHT}px;
  background: ${theme.colors.white};
  padding: 0 96px;
  transition: box-shadow 0.5s ease;
  z-index: ${theme.zindex.navbar};

  box-shadow: ${(props) =>
    props.isSticky
      ? "0 0 10px rgba(0, 0, 0, 0.5)"
      : "0 0 0px rgba(0, 0, 0, 0)"};

  @media ${theme.media.large} {
    padding: 0 16px;
  }
`;

const StyledNavbarDecoration = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 14px;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
`;

const NavbarDecorationRectangle = styled.span`
  width: 14px;
  height: 17px;
  background: ${theme.colors.primary};
`;

export const NavbarDecoration = () => (
  <StyledNavbarDecoration>
    <NavbarDecorationRectangle />
    <NavbarDecorationRectangle />
    <NavbarDecorationRectangle />
  </StyledNavbarDecoration>
);

export const NavbarMenu = styled(MenuSvg)`
  cursor: pointer;
`;

export const NavbarCart = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px 10px;
  border-radius: 18px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-family: "Cera Condensed Pro", Arial, sans-serif;
  cursor: pointer;
`;

export const NavbarCartPrice = styled.span`
  margin-right: 4px;
`;

export const NavbarCartCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
`;

export const BasketIcon = styled(BasketSvg)``;
