import styled, { css } from "styled-components";

import theme from "styles/theme";

export const Switch = styled.span`
  display: flex;
  width: fit-content;
  font-size: 16px;
  line-height: 24px;
  border-radius: 8px;
  background: ${theme.colors.lightGray};
`;

export const SwitchOption = styled.span<{ isActive: boolean }>`
  padding: 12px 17px;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.25s ease;

  ${(props) =>
    props.isActive
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          border-radius: 4px;
        `
      : css`
          color: ${theme.colors.gray};
          background: transparent;
        `}
`;
