import styled from "styled-components";

export const StyledHeader = styled.header`

  margin: 30px 0 30px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    
    padding: 8px 20px;
    border-radius: 4px;
    border: 2px solid var(--color-gray-800);
    background-color: var(--color-gray-800);
    color: var(--color-gray-300)
  }
  button:hover {
    border: 2px solid var(--color-gray-500);
  }

`