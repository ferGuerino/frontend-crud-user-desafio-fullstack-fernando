import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { TCreateContactData, createContactSchema } from "./createContactForm Schema";
import { ContactContext } from "../../providers/ContactProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContact } from "../../hooks/useContact";


const CreateContactForm = () => {
  const { register, handleSubmit} = useForm<TCreateContactData>();
     
  const { createContact } = useContact()

  const submit2 = ()=>{
    console.log(register)
  }
  const submit: SubmitHandler<TCreateContactData> = (formData) => {
    
    createContact(formData);
  }
  

  return(
      <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")}/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")}/>  
          <label htmlFor="phone">Telefone</label>
          <input type="" id="text" {...register("phone")}/>
          <button>Criar Contato</button>
      </form>
  )
}

export {CreateContactForm}