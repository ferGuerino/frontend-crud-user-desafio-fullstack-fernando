import styled from "styled-components";

export const ContainerModal = styled.div`

  top: 0;
  background-color: rgba(0,0,0,.7);  
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;

  >div{
    background-color: var(--color-gray-900);
    border: 1px solid var(--color-gray-300);
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
  }
  .close-button {
    align-self: flex-end;
    border-radius: 4px;
    border: 2px solid var(--color-gray-900);
    background-color: var(--color-gray-900);
    color: var(--color-gray-300)
  }
`

