import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/Login"
import { RegisterPage } from "../pages/Register"
import { HomePage } from "../pages/Home"
import {ProtectRoutes} from "./protectRoutes"


const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>} />
            <Route element={<ProtectRoutes/>}>
              <Route path="/home" element={<HomePage/>}/>
            </Route>
        </Routes>
    )
}

export {RoutesMain}