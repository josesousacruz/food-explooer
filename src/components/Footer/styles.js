import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00111A;
  padding: 20px;
  margin-top: 30px;
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;



export const BrandLogo = styled.img`
  width: 1.2rem;

  @media (max-width: 768px) {
    width: .1rem;
  }
`;

export const BrandName = styled.h1`
  font-size: 20px;
  margin-left: 1rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;


export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Copyright = styled.div`
color: #888888;
font-size: 12px;
white-space: nowrap; 
margin-right: 100px;

@media (max-width: 768px) {
  margin-right:0;
}
`;