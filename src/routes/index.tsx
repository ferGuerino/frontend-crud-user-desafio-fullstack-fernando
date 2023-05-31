import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Cadastro } from "../pages/Cadastro"
import { Dashboard } from "../pages/Dashboard"
import {ProtectRoutes} from "./protectRoutes"


const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route element={<ProtectRoutes/>}>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
    )
}

export {RoutesMain}