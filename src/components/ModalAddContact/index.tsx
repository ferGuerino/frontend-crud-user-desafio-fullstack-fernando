import { Dispatch} from "react"
import { TCreateContactData, createContactSchema} from "./createContactFormSchema"
import {useForm} from "react-hook-form"
import { api } from "../../services/api"
import { Contact } from "../../providers/ContactProvider"
import { Modal } from "../Modal"
import { zodResolver } from "@hookform/resolvers/zod"
import { StyledForm } from "./style"
import { toast} from "react-toastify";

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
      toast.success("Contato criado com sucesso!");   
      toggleModal()
    } catch (error) {
      toast.error("Ops!, Algo deu errado.");
      console.log(error);
    }
  }
  
  return (    
    <Modal toggleModal={toggleModal} showCloseButton={true}>
        <StyledForm>
          <form onSubmit={handleSubmit(createContact)}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" {...register("name")}/>
            {errors.name && <p className="pError">{errors.name.message}</p>}

            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")}/>  
            {errors.email && <p className="pError">{errors.email.message}</p>}

            <label htmlFor="phone">Telefone</label>
            <input type="number" id="text" {...register("phone")}/>
            {errors.phone && <p className="pError">{errors.phone.message}</p>}

            <button type="submit">Criar</button>
          </form> 
        </StyledForm>     
    </Modal>
  )
}

export {ModalAddContact}