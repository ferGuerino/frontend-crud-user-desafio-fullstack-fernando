import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm"

const LoginPage = () => {
    return(
        <div>
            <LoginForm />
            <Link to="/register">Cadastre-se</Link>
        </div>
    )
}

export {LoginPage}