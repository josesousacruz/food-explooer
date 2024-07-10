import styled from 'styled-components';

export const Container = styled.div`
margin-left: 20px
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
  background-color: #000C12;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 20px;

  span {
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ProductImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  margin-left: 20px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-left: 0;
    margin-top: 20px
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  padding:40px;
  align-items:center
`;

export const IngredientTag = styled.span`
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 1.25rem;
  }

  svg {
    cursor: pointer;
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    align-items: center ;

    span {
      margin: 10px 0;
    }
  }
`;

export const AddButton = styled.button`
  background-color: #750310;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const EditProd = styled.button`
  background-color: #750310;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;