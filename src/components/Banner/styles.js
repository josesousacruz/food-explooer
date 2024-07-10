import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  background: linear-gradient(to right, #091E26, #00131C);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  margin-top: 80px;
  position: relative;
  overflow: visible; /* Permite que elementos excedam os limites do contêiner */

  @media (max-width: 600px) {
    padding: 20px 0;
    margin-top: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-end; /* Move o texto para o lado direito */
  align-items: flex-end; /* Alinha a base da imagem com o texto */
  width: 80%;
  max-width: 1200px;
  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export const TextContainer = styled.div`
  color: #FFFFFF;
  max-width: 500px;
  z-index: 1;

  @media (max-width: 600px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 24px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: -130px;
  left: 50px;
  width: 400px;
  height: auto;

  @media (max-width: 600px) {
    position: static;
    width: 300px;
    margin-top: -50px;
  }

  @media (max-width: 320px) {
    width: 200px;
    margin-top: -30px;
  } 
`;
