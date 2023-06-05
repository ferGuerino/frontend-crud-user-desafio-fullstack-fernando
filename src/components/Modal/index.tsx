import { createPortal } from "react-dom"
import { ContainerModal } from "./style"
import { ReactNode } from "react"


interface ModalProps {
  toggleModal: () => void
  showCloseButton?: boolean
  children: ReactNode  
}

const Modal = ({toggleModal, children, showCloseButton = false}:  ModalProps) =>{ 
  
  
  return createPortal(
    <ContainerModal>
      
      <div>    
        {showCloseButton && (<button className="close-button" onClick={toggleModal}>X</button>)}    
        {children}
      </div>
    </ContainerModal>,
    document.body
  )
}

export {Modal}