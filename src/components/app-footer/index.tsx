import LogoPath from "assets/images/logo.png";
import { Divider, Title2 } from "styles/components";
import {
  Footer,
  FooterDecoration,
  FooterTop,
  FooterTopCol,
  FooterTopLink,
  FooterTopLogo,
  FooterBottom,
  FooterBottomSocials,
  FooterBottomApps,
} from "./styles";

export function AppFooter() {
  return (
    <Footer>
      <FooterDecoration />
      <FooterTop>
        {[...Array(4)].map((_, idx) => (
          <FooterTopCol key={idx}>
            <Title2>Раздел {idx + 1}</Title2>
            <Divider height={23} />
            <FooterTopLink href="#">Подраздел</FooterTopLink>
            <Divider height={16} />
            <FooterTopLink href="#">Подраздел</FooterTopLink>
            <Divider height={16} />
            <FooterTopLink href="#">Подраздел</FooterTopLink>
            <Divider height={16} />
            <FooterTopLink href="#">Подраздел</FooterTopLink>
            <Divider height={16} />
            <FooterTopLink href="#">Подраздел</FooterTopLink>
          </FooterTopCol>
        ))}
        <FooterTopLogo src={LogoPath} />
      </FooterTop>
      <FooterBottom>
        <FooterBottomSocials />
        <FooterBottomApps />
      </FooterBottom>
    </Footer>
  );
}
