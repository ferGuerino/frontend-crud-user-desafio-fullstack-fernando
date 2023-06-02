import { z } from "zod"

const createContactSchema = z.object({
  name: z.string().nonempty("Nome obrigatório").min(3,"Nome precisa conter no mínimo 3 caracteres"),
  email: z.string().nonempty("O e-mail é obrigatório").email("Deve ser um email válido"),
  phone: z.string().nonempty("Telefone obrigatório").min(11, "Telefone precisa conter 11 números"),
 
})

export type TCreateContactData = z.infer<typeof createContactSchema>

export {createContactSchema}