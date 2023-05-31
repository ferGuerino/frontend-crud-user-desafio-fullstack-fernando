/* eslint-disable react-hooks/rules-of-hooks */
import { Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const ProtectRoutes = () => {
  
  const {loading} = useAuth()

  if(loading){
    return <div>Carregando...</div>
  }

  return <Outlet/>
}

export {ProtectRoutes}