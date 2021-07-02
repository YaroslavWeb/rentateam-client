import styled from "styled-components";
import theme from "styles/theme";

// socials
import { ReactComponent as VkSvg } from "assets/svg/vk.svg";
import { ReactComponent as FacebookSvg } from "assets/svg/facebook.svg";
import { ReactComponent as TwitterSvg } from "assets/svg/twitter.svg";
import { ReactComponent as OkSvg } from "assets/svg/ok.svg";

// apps
import { ReactComponent as GoogleMarketSvg } from "assets/svg/google_play.svg";
import { ReactComponent as AppStoreSvg } from "assets/svg/app_store.svg";

export const Footer = styled.footer`
  position: relative;
  padding: 81px 96px 16px 96px;

  @media ${theme.media.large} {
    padding: 81px 16px 16px 16px;
  }
`;

const StyledFooterDecoration = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 32px;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
`;

const FooterDecorationRectangle = styled.span`
  width: 32px;
  height: 72px;
  background: ${theme.colors.primary};
`;

export const FooterDecoration = () => (
  <StyledFooterDecoration>
    <FooterDecorationRectangle />
    <FooterDecorationRectangle />
    <FooterDecorationRectangle />
  </StyledFooterDecoration>
);

export const FooterTop = styled.div`
  display: grid;
  align-items: center;
  grid: 1fr / repeat(auto-fit, minmax(172px, 1fr));
  gap: 32px;
  width: 100%;
  margin-bottom: 128px;
`;

export const FooterTopCol = styled.div``;
export const FooterTopLink = styled.a`
  :hover {
    transition: color 0.25s ease;
    color: ${theme.colors.primary};
  }
`;

export const FooterTopLogo = styled.img`
  width: 100%;
  border-radius: 50%;
  grid-area: 1 / 3;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const FooterBottom = styled.div`
  display: grid;
  grid: 1fr / 1fr 192px 1fr;
  width: 100%;
  align-items: center;

  svg {
    cursor: pointer;
  }

  @media ${theme.media.medium} {
    grid: 1fr / repeat(auto-fit, minmax(240px, 1fr));
    gap: 32px;
  }
`;

const StyledFooterBottomSocials = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 32px;
  grid-area: 1 / 2;

  @media ${theme.media.medium} {
    grid-area: auto;
  }

  svg {
    transition: color 0.25s ease;
    :hover {
      color: ${theme.colors.primary};
    }
  }
`;

export const FooterBottomSocials = () => (
  <StyledFooterBottomSocials>
    <VkSvg />
    <FacebookSvg />
    <TwitterSvg />
    <OkSvg />
  </StyledFooterBottomSocials>
);

const StyledFooterBottomApps = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-end;
  gap: 16px;
  grid-area: 1 / 3;

  @media ${theme.media.medium} {
    grid-area: auto;
    justify-content: center;
  }
`;

export const FooterBottomApps = () => (
  <StyledFooterBottomApps>
    <GoogleMarketSvg />
    <AppStoreSvg />
  </StyledFooterBottomApps>
);
