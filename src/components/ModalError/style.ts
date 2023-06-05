import styled from "styled-components";

export const StyledError = styled.div`
  
  width: 100%;  

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  
  button {
    margin-top: 20px;    
    padding: 10px 20px;
    border-radius: 4px;
    border: 2px solid var(--color-gray-800);
    background-color: var(--color-gray-800);
    color: var(--color-gray-300)
  }
  button:hover {
    border: 2px solid var(--color-gray-500);
  }
  
`