import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import {  User } from "../../providers/AuthProvider";
import { Contact } from "../../providers/ContactProvider";

import { ModalAddContact } from "../../components/ModalAddContact";
import { ModalUpdateContact } from "../../components/ModalUpdateContact";





const HomePage = () => {
 
  const { user, setUser, userLogout } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
    

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

    const toggleAddModal = () => setIsOpenAddModal(!isOpenAddModal);
    const toggleEditModal = () => setIsOpenEditModal(!isOpenEditModal);

    const handleEditContact = (contact: Contact) => {
      setSelectedContact(contact)
      toggleEditModal()
    }

    const handleDeleteContact = async (contactId: string) => {
      const token = localStorage.getItem("user-contacts:token");
      try {
        await api.delete(`/contacts/${contactId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const filteredContacts = contacts.filter((contact) => contact.id !== contactId);
        setContacts(filteredContacts);
      } catch (error) {
        console.log(error);
      }
    }
      
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
          <div>
            <h2>Contatos</h2>
            <button type="button" onClick={toggleAddModal}>Add Contato</button>
          </div>
          {
            isOpenAddModal  && <ModalAddContact toggleModal={toggleAddModal} contacts={contacts} setContacts={setContacts}/>
          }
          
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
                    <button onClick={() => handleEditContact(contact)}>Editar</button>
                    <button onClick={() => handleDeleteContact(contact.id)}>Excluir</button>
                  </div>
                  
                </li>                   
              )
            })
          }
        </ul>
        {
          isOpenEditModal  && selectedContact && <ModalUpdateContact toggleModal={toggleEditModal} contact={selectedContact} contacts={contacts} setContacts={setContacts}/>
        }
      </>
    )
}

export {HomePage}