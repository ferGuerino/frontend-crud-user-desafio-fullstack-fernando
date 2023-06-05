import { createPortal } from "react-dom"
import { Container } from "./style"
import { ReactNode } from "react"


interface ModalProps {
  toggleModal: () => void
  showCloseButton?: boolean
  children: ReactNode  
}

const Modal = ({toggleModal, children, showCloseButton = false}:  ModalProps) =>{ 
  
  
  return createPortal(
    <Container>
      {showCloseButton && (<button className="close-button" onClick={toggleModal}>X</button>)}
      <div>        
        {children}
      </div>
    </Container>,
    document.body
  )
}

export {Modal}