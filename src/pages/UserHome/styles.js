import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* Permite que os itens se ajustem automaticamente em várias linhas */
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 768px) {
    flex-direction: row; /* Manter os itens em linha */
    justify-content: center;
    padding: 20px;
  }
`;
