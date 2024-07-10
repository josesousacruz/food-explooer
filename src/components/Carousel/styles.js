import styled from 'styled-components';

export const SwiperContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 20px;
  margin-top: 20px;
  
  h2 {
    /* text-align: center; */
    margin-bottom: 20px;
    color: #ffffff; /* Ajuste a cor conforme necessário */
  }

  ${({ isActive }) =>
    !isActive &&
    `
    opacity: 0.5; /* Aplica a opacidade reduzida */
    pointer-events: none; /* Desativa a interação com o carrossel */
  `}
`;

export const Card = styled.div`
  padding: 20px;
  background-color: #1c1c1c;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #ffffff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 15px 0 10px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 10px;
`;

export const CardPrice = styled.div`
  font-size: 1.5rem;
  color: #29b6f6;
  margin-bottom: 10px;
`;

export const CardControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QuantityControl = styled.button`
  background-color: transparent;
  border: 1px solid #ccc;
  color: #ccc;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;

export const CardButton = styled.button`
  background-color: #c62828;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
