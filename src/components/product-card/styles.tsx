import styled, { css } from "styled-components";

import theme from "styles/theme";
import { ReactComponent as PlusSvg } from "assets/svg/plus.svg";
import { ReactComponent as MinusSvg } from "assets/svg/minus.svg";

export const PRODUCT_HEIGHT = 360;

export const Product = styled.div<{ isEven: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${PRODUCT_HEIGHT}px;
  max-width: 288px;
  padding: 34px 36px 16px 36px;
  position: relative;
  background: transparent;
  border-radius: 8px;
  color: ${theme.colors.gray};
  user-select: none;
  cursor: default;
  transition: background 0.25s ease, color 0.25s ease;

  :hover {
    ${(props) =>
      props.isEven
        ? css`
            background: ${theme.colors.lightGray};
          `
        : css`
            background: ${theme.colors.white};
            color: ${theme.colors.black};
          `}
  }

  @media ${theme.media.large} {
    padding: 16px 16px;
  }

  @media ${theme.media.small} {
    justify-self: center;
  }
`;

export const ProductImage = styled.img`
  object-fit: contain;
`;

export const ProductTitle = styled.div`
  font-size: 24px;
  line-height: 150%;
  text-align: center;
`;

export const ProductPrice = styled.div`
  font-size: 32px;
  line-height: 120%;
  color: ${theme.colors.primary};
  text-align: center;
`;

export const ProductAction = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 56px;
  top: 50%;
  background: ${theme.colors.white};
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  color: ${theme.colors.black};
  cursor: pointer;
  transition: transform 0.25s ease;

  :active {
    transform: scale(0.9);
  }
`;

export const PlusIcon = styled(PlusSvg)``;
const MinusIcon = styled(MinusSvg)``;

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 104px;
  height: 40px;
  position: absolute;
  right: 56px;
  top: 50%;
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  border-radius: 40px;
  overflow: hidden;
  font-size: 20px;
  line-height: 26px;
`;

const CounterControl = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: color 0.25s ease;

  :active {
    color: ${theme.colors.primary};
  }
`;

interface ProductCounterProps {
  add: () => void;
  remove: () => void;
  count: () => number;
}

export const ProductCounter = ({ add, remove, count }: ProductCounterProps) => (
  <Counter>
    <CounterControl onClick={remove}>
      <MinusIcon />
    </CounterControl>
    <span>{count()}</span>
    <CounterControl onClick={add}>
      <PlusIcon />
    </CounterControl>
  </Counter>
);

export const ProductBadge = styled.span<{ isNew: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  position: absolute;
  left: 32px;
  top: 32px;
  color: ${theme.colors.white};
  font-family: "Cabin Condensed", Arial;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  border-radius: 50%;
  background: ${(props) =>
    props.isNew ? theme.colors.primary : theme.colors.black};

  @media ${theme.media.large} {
    left: 16px;
    top: 16px;
  }
`;
