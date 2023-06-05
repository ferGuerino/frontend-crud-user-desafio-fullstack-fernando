import styled from "styled-components";

export const StyledSection = styled.section`

  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-gray-800);
    padding: 10px 25px;
    border-radius: 4PX
  }

`

export const DivUser = styled.div`

  padding: 25px 0;
  border-top: 1px solid var(--color-gray-500);
  border-bottom: 1px solid var(--color-gray-500)
`