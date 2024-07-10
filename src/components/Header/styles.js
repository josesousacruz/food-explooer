import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0D1D25;
  padding: 10px 20px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 400px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 10px;
  color: #888;
  pointer-events: none;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px 10px 10px 35px; /* Espaço para o ícone */
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: #fff;
  ::placeholder {
    color: #888;
    text-align: center;
  }
`;


export const OrdersButton = styled.button`
  background-color: #750310;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px; /* Adiciona espaço entre o ícone e o texto */
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;


export const Group = styled.div`
  display: flex;
  align-items: center;
  margin-right: 160px; /* Ajuste conforme necessário */
  gap: 30px; /* Espaço entre os elementos */
`;