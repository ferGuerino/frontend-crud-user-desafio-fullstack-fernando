import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TLoginData, loginSchema } from "./loginFormSchema"
import { useAuth } from "../../hooks/useAuth"
import { StyledForm } from "./style"
import { Link } from "react-router-dom"


const LoginForm = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<TLoginData>({
    resolver: zodResolver(loginSchema)
  })

  const {signIn} = useAuth()


    return (        
          <StyledForm>
            <form onSubmit={handleSubmit(signIn)}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" {...register("email")}/> 
              {errors.email && <p className="pError">{errors.email.message}</p>} 

              <label htmlFor="password">Senha</label>
              <input type="password" id="password" {...register("password")}/> 
              {errors.password && <p className="pError">{errors.password.message}</p>} 

              <button type="submit" >Entrar</button>
              <Link className="link" to="/register">Cadastre-se</Link>
            </form>
          </StyledForm>       
    )
}

export {LoginForm}