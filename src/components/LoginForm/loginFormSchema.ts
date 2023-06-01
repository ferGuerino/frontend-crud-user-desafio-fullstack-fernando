import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email("Deve ser um email válido"),
  password: z.string().nonempty("Senha obrigatória")
})

export type TLoginData = z.infer<typeof loginSchema>

export {loginSchema}