import React, {useState} from "react";
import useForm from '../../hooks/useForm'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { goToSignUpPage } from "../../routes/coordinator";
import { TextClickP } from "./styled";

const LoginForm = ({setRightButtonText}) => {
    const [form, onChangeInput, clear] = useForm({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    

    const onSubmitForm = (e) => {
        e.preventDefault()
    }

    const token = localStorage.getItem("token")
    const login = () => {
        setIsLoading(true);
        axios
            .post(`${BASE_URL}/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                clear();
                setIsLoading(false);
                if (token) {
                    navigate("/restaurant")
                } else {
                    navigate("/login")
                }
                alert("Login Efetuado!");
            })
            .catch((err) => {
                alert("Erro no login!");
            });
    };


    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <input 
                placeholder="email"
                required
                type={"email"}
                onChange={onChangeInput}
                />
                <input 
                placeholder="senha"
                required
                type={"password"}
                onChange={onChangeInput}
                />
                <button type={"submit"}>LOGIN</button>
                <br/>
                <TextClickP onClick={()=> goToSignUpPage(navigate)}>Não possui cadastro? Clique aqui!</TextClickP>
                
            </form>
        </div>

    )
}
export default LoginForm;