import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import {  User } from "../../providers/AuthProvider";
import { Contact } from "../../providers/ContactProvider";
import { toast} from "react-toastify";
import { ModalAddContact } from "../../components/ModalAddContact";
import { ModalUpdateContact } from "../../components/ModalUpdateContact";
import { Header } from "../../components/Header";
import { UserSection } from "../../components/UserSection";
import { Container } from "../../styles/Container";
import { DivContacts, UlContacts } from "./style";





const HomePage = () => {
 
  const { user, setUser} = useAuth();
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
        toast.success("Contato deletado com sucesso!");
      } catch (error) {
        toast.error("Ops!, Algo deu errado.");
        console.log(error);
      }
    }
      
    return (
      <>
        <Header/>
        <UserSection/>
        <Container>
          <DivContacts>
            <h2>Contatos</h2>
            <button type="button" onClick={toggleAddModal}>Add Contato</button>
          </DivContacts>
          {
            isOpenAddModal  && <ModalAddContact toggleModal={toggleAddModal} contacts={contacts} setContacts={setContacts}/>
          }       
        <UlContacts>
          {
            contacts.map((contact) =>{ 
              return(                
                <li className="liContact" key={contact.id}>
                  <div className="liDivContact">                    
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                  </div>
                  <div className="liDivBtn">
                    <button onClick={() => handleEditContact(contact)}>Editar</button>
                    <button onClick={() => handleDeleteContact(contact.id)}>Excluir</button>
                  </div>                  
                </li>                   
              )
            })
          }
        </UlContacts>
        </Container>
        {
          isOpenEditModal  && selectedContact && <ModalUpdateContact toggleModal={toggleEditModal} contact={selectedContact} contacts={contacts} setContacts={setContacts}/>
        }
      </>
    )
}

export {HomePage}