import { BrandLogo, BrandName, Brand } from "./styles";


 
const BrandLg = ({logo}) =>{
    return ( 
        <Brand>
          <BrandLogo src={logo} alt="Brand Logo" />
          <BrandName>food explorer</BrandName>
        </Brand>
    );
}

export default BrandLg;