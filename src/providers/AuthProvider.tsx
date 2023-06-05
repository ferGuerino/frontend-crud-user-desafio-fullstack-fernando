import { ReactNode, createContext, useEffect, useState } from "react";
import { TLoginData } from "../components/LoginForm/loginFormSchema";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { TRegisterData } from "../components/RegisterForm/registerFormSchema";
import { toast} from "react-toastify";


interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextValue {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  signIn: (data:TLoginData) => void
  userRegister: (data: TRegisterData) => void
  loading: boolean
  userLogout: () => void
}
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string
  createdAt: string;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

const AuthProvider = ({children}: AuthProviderProps) => {

  const navigate = useNavigate()

  const [user, setUser] = useState<User | null>(null)
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
      toast.error("Email ou senha inválido");
      console.error(error)
      
    }
  }

  const userRegister = async (formData: TRegisterData) => {
    try {
        setLoading(true);
        await api.post("/users", formData);
        toast.success("Cadastro feito com sucesso!");
    } catch (error) {
        toast.error("Ops!, Algo deu errado.");
        console.log(error);
    } finally {
        setLoading(false);
        navigate("/")
    }
 };

 const userLogout = () => {
  localStorage.removeItem("user-contacts:token");  
  setUser(null);
  navigate("/");
};

  return(
    <AuthContext.Provider value={{user, setUser, signIn, userRegister, loading, userLogout}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}