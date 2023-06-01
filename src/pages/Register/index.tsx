import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"

const RegisterPage = () => {
    return (
      <div>
        <RegisterForm />
        <Link to="/">Login</Link>
  </div>
    )
}

export {RegisterPage}