import React, {useState} from "react";
import useForm from '../../hooks/useForm'
import { useNavigate } from "react-router-dom";
import { login } from "../../services/requests.js";

const LoginForm = ({setButton}) => {
    const [form, onChangeInput, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    
    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, clear, navigate, setButton)
        console.log(form)
    }


    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <input
                name="email"
                placeholder="email"
                required
                type={"email"}
                onChange={onChangeInput}
                />
                <input 
                name="password"
                placeholder="senha"
                required
                type={"password"}
                onChange={onChangeInput}
                />
                <button type={"submit"}>LOGIN</button>
                <br/>
                
            </form>
        </div>

    )
}
export default LoginForm;