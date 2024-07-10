import { Container, LoginContainer,LoginWrapper } from './styles';
import CadastroForm from '../../components/CadastroForm'
import BrandLg from '../../components/Brand';
import logo from '../../assets/Polygon 1.png'


export const Cadastro = () => (
  <Container>
    <BrandLg logo={logo}/>
    <LoginWrapper>
      <LoginContainer>
        <CadastroForm/>
      </LoginContainer>
    </LoginWrapper>
  </Container>
);

