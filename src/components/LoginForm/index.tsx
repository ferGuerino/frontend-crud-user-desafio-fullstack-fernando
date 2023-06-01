import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TLoginData, loginSchema } from "./loginFormSchema"
import { useAuth } from "../../hooks/useAuth"


const LoginForm = () => {
  const {register, handleSubmit} = useForm<TLoginData>({
    resolver: zodResolver(loginSchema)
  })

  const {signIn} = useAuth()


    return (        
          <form onSubmit={handleSubmit(signIn)}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")}/>  
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" {...register("password")}/> 

            <button type="submit" >Entrar</button>
          </form>       
    )
}

export {LoginForm}