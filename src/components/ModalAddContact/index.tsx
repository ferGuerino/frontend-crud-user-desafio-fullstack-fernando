
import { Dispatch} from "react"
import { TCreateContactData, createContactSchema} from "./createContactFormSchema"
import {useForm} from "react-hook-form"
import { api } from "../../services/api"
import { Contact } from "../../providers/ContactProvider"
import { Modal } from "../Modal"
import { zodResolver } from "@hookform/resolvers/zod"

interface ModalAddContactProps {
  toggleModal: () => void
  contacts: Contact[]
  setContacts: Dispatch<React.SetStateAction<Contact[]>>
}

const ModalAddContact = ({toggleModal, contacts, setContacts}: ModalAddContactProps) =>{
  const { register, handleSubmit, formState: { errors }} = useForm<TCreateContactData>({
    resolver: zodResolver(createContactSchema)
  });
  
  const createContact = async (data:TCreateContactData) =>{

    const token = localStorage.getItem("user-contacts:token");
    try {

      const request = await api.post("/contacts", data,{
        headers: {
            'Authorization': `Bearer ${token}`,
        }
      })

      const response = request.data;
      
      const newContact = [response, ...contacts]
      setContacts(newContact)    
      toggleModal()
    } catch (error) {
      console.log(error);
    }
  }
  
  return (    
    <Modal toggleModal={toggleModal} showCloseButton={true}>
        <form onSubmit={handleSubmit(createContact)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")}/>
          {errors.name && <p>{errors.name.message}</p>}

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")}/>  
          {errors.email && <p>{errors.email.message}</p>}

          <label htmlFor="phone">Telefone</label>
          <input type="number" id="text" {...register("phone")}/>
          {errors.phone && <p>{errors.phone.message}</p>}

          <button type="submit">Criar</button>
        </form>      
    </Modal>
  )
}

export {ModalAddContact}