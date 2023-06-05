import styled from "styled-components";

export const DivContacts = styled.div`

  display: flex;
  justify-content: space-between;

  padding: 25px 0;

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

export const UlContacts = styled.ul`

  display: flex;
  flex-direction: column;
  gap: 25px;

  .liContact {
    display: flex;
    justify-content: space-between;
    gap: 25px;

    
  }

  .liDivContact {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 25px;
    background-color: var(--color-gray-800);
    border-radius: 4px
  }

  .liDivBtn {
    display: flex;
    gap: 20px

    
  }

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