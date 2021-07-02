import styled from "styled-components";

import theme from "styles/theme";
import TipSvg from "assets/svg/tip.svg";

export const INPUT_HEIGHT = 42;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 210px;
  height: ${INPUT_HEIGHT}px;
  padding: 10px 16px;
  font-size: 16px;
  line-height: 22px;
  background: ${theme.colors.lightGray};
  color: ${theme.colors.black};
  font-family: "Abel", Arial, sans-serif;
  border: none;
  border-radius: 4px;
  outline: 0;

  ::placeholder {
    color: ${theme.colors.gray};
  }
`;

export const InputTooltip = styled.span`
  position: absolute;
  bottom: calc(-${INPUT_HEIGHT}px - 16px);
  left: calc(-210px / 4);
  padding: 12px 20px;
  border-radius: 8px;
  width: max-content;
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  font-family: "Cabin Condensed", Arial, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  z-index: ${theme.zindex.navbar - 1};

  :after {
    position: absolute;
    width: 20px;
    height: 8px;
    top: -8px;
    right: 50%;
    transform: translateX(50%);
    content: "";
    background-image: url(${TipSvg});
  }
`;
