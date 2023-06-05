import { z } from "zod"

const registerSchema = z.object({
  name: z.string().nonempty("Nome obrigatório").min(3,"Nome precisa conter no mínimo 3 caracteres"),
  email: z.string().nonempty("O e-mail é obrigatório").email("Deve ser um email válido"),
  phone: z.string().nonempty("Telefone obrigatório").min(10, "Telefone precisa conter 10 números"),
  password: z.string().nonempty("Senha obrigatória").min(4, "Senha precisa conter no mínimo 4 caracteres")
})

export type TRegisterData = z.infer<typeof registerSchema>

export {registerSchema}


