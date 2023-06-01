import { ReactNode, createContext, useEffect, useState } from "react";
import { TLoginData } from "../components/LoginForm/loginFormSchema";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { TRegisterData } from "../components/RegisterForm/registerFormSchema";


interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextValue {
  signIn: (data:TLoginData) => void
  userRegister: (data: TRegisterData) => void
  loading: boolean
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

const AuthProvider = ({children}: AuthProviderProps) => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const token = localStorage.getItem("user-contacts:token")

    if(!token){
      navigate("/")
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`
    setLoading(false)
  },[])

  const signIn = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data)

      const {token} = response.data

      api.defaults.headers.common.authorization = `Bearer ${token}`
      localStorage.setItem("user-contacts:token", token)

      navigate("home")
    } catch (error) {
      console.error(error)
      
    }
  }

  const userRegister = async (formData: TRegisterData) => {
    try {
       setLoading(true);
       await api.post("/users", formData);
       console.log("Cadastro efetuado com sucesso");
    } catch (error) {
       console.log(error);
    } finally {
       setLoading(false);
       navigate("/")
    }
 };

  return(
    <AuthContext.Provider value={{signIn, userRegister,loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}