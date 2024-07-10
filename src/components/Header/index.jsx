import { useEffect, useState } from "react";
import { HeaderContainer, SearchBar, OrdersButton, LogoutButton, Group, SearchContainer, SearchIcon } from "./styles";
import BrandLg from "../Brand";
import { FiLogOut, FiArchive } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import logo from "../../assets/Polygon 1.png"
import { useAdmin } from "../../contexts/AdminContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };


  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { isAdmin } = useAdmin();
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleNewPrato = () =>{
    navigate('/produto/new');
  }

  return (
    <HeaderContainer>
      {isMobile ? <IoIosMenu /> : null}

      <BrandLg logo={logo} />
      <SearchContainer>
        <SearchIcon />
        <SearchBar placeholder="Busque por pratos ou ingredientes" />
      </SearchContainer>
      {isMobile ? <FiArchive /> :
        <Group>
          <OrdersButton onClick={isAdmin ? handleNewPrato : ''} >
            {isAdmin ? <span>Novo Prato</span> :(<><FiArchive /> <span>Pedidos (0)</span></>) }
          </OrdersButton>
          <LogoutButton onClick={handleLogout}>
            <FiLogOut />
          </LogoutButton>
        </Group>
      }
    </HeaderContainer>
  );
};

export default Header;