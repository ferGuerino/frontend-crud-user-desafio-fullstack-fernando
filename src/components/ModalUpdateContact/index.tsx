
import { Dispatch, useEffect} from "react"
import { TUpdateContactData, updateContactSchema} from "./updateContactFormSchema"
import {useForm} from "react-hook-form"
import { api } from "../../services/api"
import { Contact } from "../../providers/ContactProvider"
import { Modal } from "../Modal"
import { zodResolver } from "@hookform/resolvers/zod"

interface ModalUpdateContactProps {
  toggleModal: () => void
  contact: Contact
  contacts: Contact[]
  setContacts: Dispatch<React.SetStateAction<Contact[]>>
  
}

const ModalUpdateContact = ({toggleModal, contacts, contact, setContacts}: ModalUpdateContactProps) =>{
  const { register, handleSubmit, setValue, formState: { errors }} = useForm<TUpdateContactData>({
    resolver: zodResolver(updateContactSchema)
  });

  useEffect(() => {
    setValue("name", contact.name);
    setValue("email", contact.email);
    setValue("phone", contact.phone);
  }, [contact, setValue]);
  
  const updateContact = async (data:TUpdateContactData) =>{

    const token = localStorage.getItem("user-contacts:token");
    try {

      const request = await api.patch(`/contacts/${contact.id}`, data,{
        headers: {
            'Authorization': `Bearer ${token}`,
        }
      })

      const response = request.data;
      
      const updatedContacts  = contacts.map((contact) =>{
        if(contact.id === response.id){
          return response
        }
        return contact
      })
      setContacts(updatedContacts)    
      toggleModal()
      
    } catch (error) {
      console.log(error);
    }
  }
  
  return (    
    <Modal toggleModal={toggleModal} showCloseButton={true}>
        <form onSubmit={handleSubmit(updateContact)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")}/>
          {errors.name && <p>{errors.name.message}</p>}

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")}/>  
          {errors.email && <p>{errors.email.message}</p>}

          <label htmlFor="phone">Telefone</label>
          <input type="number" id="text" {...register("phone")}/>
          {errors.phone && <p>{errors.phone.message}</p>}

          <button type="submit">Atualizar</button>
        </form>      
    </Modal>
  )
}

export {ModalUpdateContact}