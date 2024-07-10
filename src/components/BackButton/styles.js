import styled from "styled-components";

export const Container = styled.button`
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