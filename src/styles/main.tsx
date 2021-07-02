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
  grid: 1fr / repeat(auto-fill, minmax(290px, 1fr));
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

export const CategoriesSection = styled.div`
  & > *:last-child {
    padding-bottom: ${PRODUCT_HEIGHT}px;
  }

  & > *:nth-child(2n) {
    background: ${theme.colors.white};
  }
`;

export const CategorySection = styled.div`
  padding: 32px 96px;

  background: ${theme.colors.lightGray};

  @media ${theme.media.large} {
    padding: 16px 16px;
  }
`;

export const CategoryWrapper = styled.div`
  display: grid;
  grid: 1fr / repeat(auto-fill, minmax(288px, 1fr));
  gap: 32px;
  width: 100%;
`;
