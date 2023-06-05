import styled from "styled-components";

export const StyledForm = styled.div`

  
  width: 100%;
  

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  form {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px
  }
  button {
    margin-top: 20px;
    height: 35px;
    border-radius: 4px;
    border: 2px solid var(--color-gray-800);
    background-color: var(--color-gray-800);
    color: var(--color-gray-300)
  }
  button:hover {
    border: 2px solid var(--color-gray-500);
  }

  input {
    padding: 8px;
    height: 35px;
    border: 2px solid var(--color-gray-600);
    border-radius: 4px;
    background-color: var(--color-gray-800);
    color: var(--color-gray-300)    
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  .pError {
    color: var(--color-error);
    font-size: 12px
  }

  
`