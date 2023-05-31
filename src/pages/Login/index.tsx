import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TLoginData, schema } from "./validator"
import { useAuth } from "../../hooks/useAuth"


const Login = () => {
  const {register, handleSubmit} = useForm<TLoginData>({
    resolver: zodResolver(schema)
  })

  const {signIn} = useAuth()


    return (
        <main>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(signIn)}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")}/>  
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" {...register("password")}/> 

            <button type="submit" >Entrar</button>
          </form>
        </main>
    )
}

export {Login}