import { FooterContainer,Copyright } from "./styles";
import logo from "../../assets/logoFooter.png"
import BrandLg from "../Brand";


export const Footer = () => {
    return (
      <FooterContainer>
        <BrandLg logo={logo}/>
        <Copyright>© 2023 - Todos os direitos reservados.</Copyright>
      </FooterContainer>
    );
  };
