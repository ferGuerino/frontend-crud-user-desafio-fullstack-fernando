import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TRegisterData, registerSchema } from "./registerFormSchema"
import { useAuth } from "../../hooks/useAuth"


const RegisterForm = () => {
  const {register, handleSubmit} = useForm<TRegisterData>({
    resolver: zodResolver(registerSchema)
  })

  
  const {userRegister} = useAuth()


    return (        
          <form onSubmit={handleSubmit(userRegister)}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" {...register("name")}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")}/>  
            <label htmlFor="phone">Telefone</label>
            <input type="" id="text" {...register("phone")}/>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" {...register("password")}/> 

            <button type="submit" >Cadastrar</button>
          </form>       
    )
}

export {RegisterForm}