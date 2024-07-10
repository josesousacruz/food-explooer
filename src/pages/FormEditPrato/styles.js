import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000c12;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  span {
    margin-left: 8px;
  }
`;

export const FormTitle = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  flex: 1;
`;

export const Label = styled.label`
  color: white;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #0D161B;
  border-radius: 5px;
  background-color: #0D161B;
  color: white;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #0D161B;
  border-radius: 5px;
  background-color: #0D161B;
  color: white;
  height: 150px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #0D161B;
  border-radius: 5px;
  background-color: #0D161B;
  color: white;
`;

export const Button = styled.button`
  background-color: #0D161B;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0D161B;
  }
`;

export const IngredientsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const IngredientTag = styled.span`
  background-color: #0D161B;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const IngredientInput = styled.input`
  padding: 10px;
  border: 1px solid #0D161B;
  border-radius: 5px;
  background-color: #0D161B;
  color: white;
  flex: 1;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
