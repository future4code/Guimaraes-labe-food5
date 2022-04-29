import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { useNavigate } from "react-router-dom";
import { goToSearchRestaurantPage } from "../routes/coordinator";
const GlobalState = (props) => {
  //Organizando o código

  //1 - Hooks gerais:
  const navigate = useNavigate();

  //2 - Todos os estados gerais da aplicação:
  const token = localStorage.getItem("token");
  const [loginButtonText, setLoginButtonText] = useState(
    token ? "Logout" : "Login"
  );

  const states = { loginButtonText };
  const setters = { setLoginButtonText };

  //3 - Services:
  const login = (body, clear, navigate, setLoginButtonText) => {
    axios
      .post(`${BASE_URL}/user/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        goToSearchRestaurantPage(navigate);
        setLoginButtonText("Logout");
        console.log(res);
      })
      .catch((err) => alert(err.response.data.message));
  };
  const signUp = (body, clear, navigate, setLoginButtonText) => {
    axios
      .post(`${BASE_URL}/user/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        goToSearchRestaurantPage(navigate);
        setLoginButtonText("Logout");
        console.log(res);
      })
      .catch((err) => alert(err.response.data.message));
  };

  const services = { login, signUp };

  //4 - Requests

  //4 - Passar por props para o provider:
  return (
    <GlobalStateContext.Provider value={{ states, setters, services }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
