import styled, { css } from "styled-components";

import theme from "styles/theme";
import { NAVBAR_HEIGHT } from "components/app-navbar/styles";

export const BAR_GAP = 32;
export const BAR_HEIGHT = 64;

export const StyledCategoriesBar = styled.div<{ isSticky: boolean }>`
  display: flex;
  justify-content: center;
  position: sticky;
  // -1px так как появляется зазор между хедером и баром, при свитче доставки. (bug fix)
  top: calc(${NAVBAR_HEIGHT}px - 1px);
  width: 100%;
  height: ${BAR_HEIGHT}px;
  padding: 0 96px;
  font-size: 18px;
  line-height: 24px;
  background: ${theme.colors.white};
  color: ${theme.colors.gray};
  border-radius: 0 0px 16px 16px;
  z-index: ${theme.zindex.navbar - 2};
  transition: box-shadow 0.5s ease, padding 0.1s linear;

  ${(props) =>
    props.isSticky
      ? css`
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
        `
      : css`
          box-shadow: 0 0 0px rgba(0, 0, 0, 0);
        `}

  @media ${theme.media.large} {
    padding: 0 16px;
  }
`;

export const WrapperCategoriesBar = styled.div<{ isSticky: boolean }>`
  display: grid;
  align-items: flex-end;
  gap: ${BAR_GAP}px;
  grid-auto-flow: column;
  position: relative;
  max-width: 1248px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-points-x: repeat(100%);
  transition: bottom 0.25s ease;

  bottom: ${(props) => (props.isSticky ? "4px" : 0)};

  ::-webkit-scrollbar {
    display: none;
  }
`;

interface CategoriesBarItemProps {
  isActive: () => boolean;
}

export const CategoriesBarItem = styled.span<CategoriesBarItemProps>`
  position: relative;
  max-width: 100px;
  white-space: nowrap;
  height: 38px;
  scroll-snap-align: start;
  cursor: pointer;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    content: "";
    border-bottom: solid 2px ${theme.colors.primary};
    transform: scaleX(0);
    transform-origin: 0% 50%;
    transition: transform 0.25s ease;
  }

  ${(props) =>
    props.isActive() &&
    css`
      color: ${theme.colors.primary};

      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        content: "";
        border-bottom: solid 2px ${theme.colors.primary};
        transform: scaleX(1);
      }
    `}
`;
