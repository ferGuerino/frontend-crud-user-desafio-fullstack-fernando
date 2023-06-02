import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import {  User } from "../../providers/AuthProvider";
import { Contact } from "../../providers/ContactProvider";
import { CreateContactForm } from "../../components/CreateContactForm"





const HomePage = () => {
 
  const { user, setUser, userLogout } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([])
    

    useEffect(()=>{
      
      (async () =>{
        const response = await api.get<User>("users/self")
  
        setUser(response.data)
      })(),
      (async () =>{
        const response = await api.get<Contact[]>("contacts")

        setContacts(response.data)
      })()
    }, [])
      
    return (
      <>
        <header>          
          <h1>Bem vindo, {user?.name}</h1>         
          <button onClick={() => userLogout()}>Logout</button>
        </header>
        <section>
          <h3>Dados do usuário</h3>
          <div>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <p>{user?.phone}</p>
          </div>
        </section>
        <div>
          <h2>Contatos</h2>
          <CreateContactForm/>
        </div>
        <ul>
          {
            contacts.map((contact) =>{ 
              return(                
                <li key={contact.id}>
                  <div>                    
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                  </div>
                  <div>
                    <button>Editar</button>
                    <button>Excluir</button>
                  </div>
                </li>                   
              )
            })
          }
        </ul>
      </>
    )
}

export {HomePage}