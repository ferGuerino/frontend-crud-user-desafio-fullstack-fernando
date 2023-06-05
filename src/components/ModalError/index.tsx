import { useNavigate } from "react-router-dom"
import { Modal } from "../Modal"
import { StyledError } from "./style"

interface ModalErrorProps {
  toggleModal: () => void  
}

const ModalError = ({toggleModal}: ModalErrorProps) =>{  

  const navigate = useNavigate()

  const handleCloseAndRedirect = () => {
    toggleModal()
    navigate("/")
  }  
  
  return (    
    <Modal toggleModal={toggleModal} showCloseButton={false}>
      <StyledError>
        <h2>Você não está autenticado!</h2>
        <button onClick={handleCloseAndRedirect}>Ir para o login</button> 
      </StyledError>           
    </Modal>
  )
}

export {ModalError}