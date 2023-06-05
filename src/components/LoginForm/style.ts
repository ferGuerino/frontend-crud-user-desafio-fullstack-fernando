import styled from "styled-components";

export const StyledForm = styled.div`

  background-color: var(--color-gray-800);
  width: 100%;
  max-width: 400px;
  padding: 32px 16px;
  border-radius: 8px;

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
    border: 2px solid var(--color-gray-900);
    background-color: var(--color-gray-900);
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
  .pError {
    color: var(--color-error);
    font-size: 12px
  }

  .link {
    margin-top: 20px;    
    border-radius: 4px;
    padding: 6px;
    border: 2px solid var(--color-gray-900);
    background-color: var(--color-gray-900);
    color: var(--color-gray-300);
    text-decoration: none;
    text-align: center;
    
  }
  .link:hover {
    border: 2px solid var(--color-gray-500);
  }
`