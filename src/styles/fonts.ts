import { css } from "styled-components";
import AbelRegularTTF from "assets/fonts/Abel-Regular.ttf";
import BarlowCondensedRegularTTF from "assets/fonts/BarlowCondensed-Regular.ttf";
import CabinCondensedBoldTTF from "assets/fonts/CabinCondensed-Bold.ttf";
import CeraCondensedProRegularTTF from "assets/fonts/CeraCondensedPro-Regular.ttf";

export default css`
  @font-face {
    font-family: "Abel";
    src: url(${AbelRegularTTF}) format("truetype");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "Barlow Condensed";
    src: url(${BarlowCondensedRegularTTF}) format("truetype");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "Cabin Condensed";
    src: url(${CabinCondensedBoldTTF}) format("truetype");
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: "Cera Condensed Pro";
    src: url(${CeraCondensedProRegularTTF}) format("truetype");
    font-style: normal;
    font-weight: 400;
  }
`;
