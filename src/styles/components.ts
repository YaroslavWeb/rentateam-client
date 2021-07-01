import styled from "styled-components";

interface DividerProps {
  height?: number;
  heightMob?: number;
}

export const Divider = styled.div<DividerProps>`
  height: ${(props) => props.height || 24}px;

  @media ${(props) => props.theme.media.large} {
    height: ${(props) => props.heightMob || 12}px;
  }
`;

export const Title1 = styled.h1`
  font-size: 4em;
  line-height: 150%;
  font-weight: 700;
`;

export const Title2 = styled.h1`
  font-size: 2em;
  line-height: 150%;
  font-weight: 400;
`;
