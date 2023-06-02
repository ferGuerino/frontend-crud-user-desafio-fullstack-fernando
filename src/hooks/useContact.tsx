import { useContext } from "react"
import { ContactContext } from "../providers/ContactProvider"

const useContact = () =>{
  const contactContext = useContext(ContactContext)

  return contactContext
}

export {useContact}