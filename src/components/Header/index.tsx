import { useAuth } from "../../hooks/useAuth";
import { Container } from "../../styles/Container";
import { StyledHeader } from "./style";



const Header = () => {

  const { user, userLogout } = useAuth();

  return (
        <Container>
          <StyledHeader>          
            <h1>Bem vindo, {user?.name}</h1>         
            <button onClick={() => userLogout()}>Logout</button>
        </StyledHeader>
        </Container>
  )
}

export {Header}