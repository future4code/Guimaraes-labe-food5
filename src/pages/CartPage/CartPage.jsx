import React, { useCOntext, useLayoutEffect, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import useNavigate from "react-router-dom";
import { BASE_URL } from "../../constants/url";

const CartPage = (props) => {
  useProtectedPage();

  const navigate = useNavigate();

  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const { states, setters, requests } = useContext(GlobalStateContext);
  const { cart, activeOrder } = states;
  const { setCart, setActiveOrder } = setters;
  const { addToCart, removeFromCart, getActiveOrder, getProfile } = requests;

  const getLocalStorage = () => {
    //Carrinho recebe os dados dos produtos pelo local storage:
    if (localStorage.getItem("cart") && localStorage.getItem("cart").length) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  };

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };
  const getShipping = (price) => {
    setShipping(price);
    setTotal(shipping + totalProd);
  };

  for (let i = 0; i < cart.length; i++) {
    totalProd = cart[i].product.price * parseInt(cart[i].quantity) + totalProd;
  }
  /* const toBuyFoods = () => {
    //CONTINUAR DAQUI
    const id = cart[0].restId;
    let body = {};
    const result =
      cart.length > 0 &&
      cart.map((cart) => ({ id: cart.product.id, quantity: cart.quantity }));
    body.products = result;
    body.paymentMethod = payment;

    const header = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .post(`${BASE_URL}/restaurants/${id}/order`, body, header)
      .get((res) => {
        localStorage.removeItem("cart");
        getLocalStorage();
      })
      .catch();
  };
 */
  return <div></div>;
};
export default CartPage;
