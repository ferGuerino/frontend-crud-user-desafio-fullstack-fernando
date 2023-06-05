import styled from "styled-components";

const Container = styled.div`

  top: 0;
  background-color: rgba(0,0,0,.5);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content:center;
  align-items: center;

  >div{
    background-color: var(--color-gray-900);
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 450px;
  }
`

export {Container}