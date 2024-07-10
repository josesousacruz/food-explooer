import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
`;


export const LoginWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;


export const LoginContainer = styled.div`
  background-color: #001119;
  padding: 64px;
  height: 33.75rem;
  width: 29.75rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    padding: 32px;
    box-shadow: none;
  }
`;
