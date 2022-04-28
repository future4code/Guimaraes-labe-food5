import React from "react";
import LoginForm from "./LoginForm";
import { goToSignUpPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const LoginPage = ({setButton}) => {
    const navigate = useNavigate()
    useUnprotectedPage()

    return (
        <div>
            <LoginForm setButton={setButton}/>
            <div>
                <button
                    onClick={() => goToSignUpPage(navigate)}
                    type={"submit"}
                >
                    Não possui cadastro? Clique aqui.
                    </button>
            </div>
        </div>
    )
}

export default LoginPage