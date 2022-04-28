import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToRestaurantPage } from '../routes/coordinator'

export const login = (body, clear, navigate, setButton) => {
    
    axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRestaurantPage(navigate)
            setButton("Logout")
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

