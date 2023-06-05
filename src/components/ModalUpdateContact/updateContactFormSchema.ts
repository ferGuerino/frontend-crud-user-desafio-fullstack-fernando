import { z } from "zod"

const updateContactSchema = z.object({
  name: z.string().nonempty("Nome obrigatório").min(3,"Nome precisa conter no mínimo 3 caracteres").optional(),
  email: z.string().nonempty("O e-mail é obrigatório").email("Deve ser um email válido").optional(),
  phone: z.string().nonempty("Telefone obrigatório").min(10, "Telefone precisa conter 10 números").optional(),
 
})

export type TUpdateContactData = z.infer<typeof updateContactSchema>

export {updateContactSchema}