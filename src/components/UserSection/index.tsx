import { useAuth } from "../../hooks/useAuth";
import { Container } from "../../styles/Container";
import { DivUser, StyledSection } from "./style";


const UserSection = () => {
  const { user} = useAuth();

  return (
        <DivUser>
          <Container>
            <StyledSection>
              <h3>Dados do usuário</h3>
              <div>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
                <p>{user?.phone}</p>
              </div>
            </StyledSection>
          </Container>
        </DivUser>
  )
}

export {UserSection}