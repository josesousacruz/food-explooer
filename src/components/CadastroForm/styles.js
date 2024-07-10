import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;

    @media (max-width: 768px) {
    width: 100%;
    padding: 32px;
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  font-size: 31px;
  margin-bottom: 44px;
  margin-top: 24px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  margin-top: 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: #2c2c2c;
  color: white;
  
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 24px;
  margin-top: 24px;

  &:hover {
    background-color: #d40813;
  }
`;

export const SignUpLink = styled.a`
  display: block;
  margin-top: 16px;
  color: #fff;
  cursor: pointer;
`;
