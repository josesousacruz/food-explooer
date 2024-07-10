import { Container, LoginContainer, LoginWrapper } from './styles';
import LoginForm from '../../components/LoginForm';
import BrandLg from '../../components/Brand';
import logo from '../../assets/Polygon 1.png'

export const Login = () => (
  <Container>
    <BrandLg logo={logo} />
    <LoginWrapper>
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    </LoginWrapper>
  </Container>
);

