import { ReactNode, createContext, useEffect, useState } from "react";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";


interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextValue {
  signIn: (data:TLoginData) => void
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

      navigate("dashboard")
    } catch (error) {
      console.error(error)
      
    }
  }

  return(
    <AuthContext.Provider value={{signIn, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}