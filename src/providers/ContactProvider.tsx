import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface ContactProviderProps {
  children: ReactNode
}

interface ContactContextValue {
  contacts: Contact[] | null
  
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
  
  return(
    <ContactContext.Provider value={{contacts}}>
      {children}
    </ContactContext.Provider>
  )
}

export {ContactContext, ContactProvider}