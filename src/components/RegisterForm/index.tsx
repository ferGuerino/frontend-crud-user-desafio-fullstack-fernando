import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import { TRegisterData, registerSchema } from "./registerFormSchema"
import { useAuth } from "../../hooks/useAuth"



const RegisterForm = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<TRegisterData>({
    resolver: zodResolver(registerSchema)
  })

  
  const {userRegister} = useAuth()


    return (        
          <form onSubmit={handleSubmit(userRegister)}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" {...register("name")}/>
            {errors.name && <p>{errors.name.message}</p>}

            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")}/>  
            {errors.email && <p>{errors.email.message}</p>}

            <label htmlFor="phone">Telefone</label>
            <input type="number" id="text" {...register("phone")}/>
            {errors.phone && <p>{errors.phone.message}</p>}

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" {...register("password")}/> 
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit" >Cadastrar</button>
          </form>       
    )
}

export {RegisterForm}