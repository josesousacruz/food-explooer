import styled from "styled-components";

export const BrandWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 20px;
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

export const BrandLogo = styled.img`
  width: 1.2rem;

  @media (max-width: 768px) {
    width: 1rem;
  }
`;

export const BrandName = styled.h1`
  font-size: 1.5rem;
  margin-left: 1rem;
  color: white;
   white-space: nowrap; 

  @media (max-width: 768px) { 
    margin-left: .8rem;
    font-size: .8rem;
  }
`;
