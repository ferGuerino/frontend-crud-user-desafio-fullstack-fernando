import { useEffect, useState } from "react"
import { api } from "../../services/api";


interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string
  createdAt: string;
}

const HomePage = () => {

    const [contacts, setContacts] = useState<Contact[]>([])
    const [user, setUser] = useState<User | null>(null)

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
        <h1>Bem vindo, {user?.name}</h1>
        <h3>Dados do usuário</h3>
        <div>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <p>{user?.phone}</p>
        </div>
        <div>
          <h2>Contatos</h2>
          <button>Criar contato</button>
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