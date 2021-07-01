import { PRODUCT_HEIGHT } from "components/product-card/styles";
import styled from "styled-components";

import theme from "./theme";

export const Container = styled.div``;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 110px 96px 64px 96px;

  @media ${theme.media.large} {
    padding: 55px 16px 32px 16px;
  }
`;

export const Address = styled.div`
  display: grid;
  grid: 1fr / repeat(auto-fill, minmax(250px, 1fr));
  gap: 43px;
  width: 100%;
  margin-top: 47px;

  @media ${theme.media.large} {
    gap: 16px;
    margin-top: 16px;
  }
`;

export const AddressItem = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 12px;
`;

interface CategorySectionProps {
  isEven: boolean;
  isLast: boolean;
}

export const CategorySection = styled.div<CategorySectionProps>`
  padding: 32px 96px;
  padding-bottom: ${(props) => (props.isLast ? PRODUCT_HEIGHT : 32)}px;

  background: ${(props) =>
    props.isEven ? theme.colors.white : theme.colors.lightGray};

  @media ${theme.media.large} {
    padding: 16px 16px;
    padding-bottom: ${(props) => (props.isLast ? PRODUCT_HEIGHT : 16)}px;
  }
`;

export const CategoryWrapper = styled.div`
  display: grid;
  grid: 1fr / repeat(auto-fill, minmax(288px, 1fr));
  gap: 32px;
  width: 100%;
`;
