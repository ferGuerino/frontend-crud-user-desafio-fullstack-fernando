import { ReactNode, createContext, useEffect, useState } from "react";
import { TLoginData } from "../components/LoginForm/loginFormSchema";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { TRegisterData } from "../components/RegisterForm/registerFormSchema";



interface ContactProviderProps {
  children: ReactNode
}

interface ContactContextValue {
  contacts: Contact[] | null
  //createContact: (contactData: TCreateContactData) => Promise<void>
  
  
}
export interface Contact {
  id: string; 
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}




const ContactContext = createContext<ContactContextValue>({} as ContactContextValue)

const ContactProvider = ({children}: ContactProviderProps) => {

  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(()=>{
        
    (async () =>{
      const response = await api.get<Contact[]>("contacts")
  
      setContacts(response.data)
    })()
  }, [])

  /*
  const createContact = async (formData: TCreateContactData) => {
    const token = localStorage.getItem("user-contacts:token");
    try {
        const request = await api.post("/contacts", formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        const response = request.data
        const newContact = [...contacts, response]
        console.log(newContact)
        setContacts(newContact);
    } catch (error) {
       console.log(error); 
    }
  } */

  return(
    <ContactContext.Provider value={{contacts}}>
      {children}
    </ContactContext.Provider>
  )
}

export {ContactContext, ContactProvider}