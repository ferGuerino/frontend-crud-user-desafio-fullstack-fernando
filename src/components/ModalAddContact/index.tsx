import { createPortal } from "react-dom"
import { Container } from "./style"
import { Dispatch, useEffect, useRef } from "react"
import { TCreateContactData} from "./createContactFormSchema"
import {useForm} from "react-hook-form"
import { api } from "../../services/api"
import { Contact } from "../../providers/ContactProvider"

interface ModalAddContactProps {
  toggleModal: () => void
  contacts: Contact[]
  setContacts: Dispatch<React.SetStateAction<Contact[]>>
}

const ModalAddContact = ({toggleModal, contacts, setContacts}: ModalAddContactProps) =>{
  const { register, handleSubmit} = useForm<TCreateContactData>();
  
  const ref = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    const handleClick = (event: MouseEvent) =>{
      if(!ref.current){
        return;
      }

      if(!event.target){
        return;
      }

      if(!ref.current.contains(event.target as HTMLElement)){
        toggleModal()
      }

    }

    window.addEventListener("mousedown", handleClick)

    return () => {
      window.removeEventListener("mousedown", handleClick)
    }
  },[toggleModal])

  const createContact = async (data:TCreateContactData) =>{

    const token = localStorage.getItem("user-contacts:token");
    try {

      const request = await api.post("/contacts", data,{
        headers: {
            'Authorization': `Bearer ${token}`,
        }
      })

      const response = request.data;
      console.log(response)
      const newContact = [response, ...contacts]
      setContacts(newContact)    
      toggleModal()
    } catch (error) {
      console.log(error);
    }
  }
  
  return createPortal(
    <Container>
      <div ref={ref}>
        <form onSubmit={handleSubmit(createContact)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")}/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")}/>  
          <label htmlFor="phone">Telefone</label>
          <input type="" id="text" {...register("phone")}/>
          <button type="submit">Criar</button>
        </form>
      </div>
    </Container>,
    document.body
  )
}

export {ModalAddContact}