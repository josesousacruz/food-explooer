import { Container,MainContent } from "./styles";
import Header from "../../components/Header"
import { Footer } from "../../components/Footer";

// eslint-disable-next-line react/prop-types
const PageLayout = ({ children }) => {
    return (
      <Container>
        <Header />
        <MainContent>
          {children}
        </MainContent>
        <Footer/>
      </Container>
    );
  };

  export default PageLayout;