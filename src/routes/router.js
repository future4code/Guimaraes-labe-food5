import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import OnGoingPage from "../pages/OnGoingPage/OnGoingPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import SearchRestaurantPage from "../pages/SearchRestaurantPage/SearchRestaurantPage";
import SignUpPage from "../pages/SingUpPage/SignUpPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/cadastro" element={<SignUpPage />} />
        <Route exact path="/perfil/:id" element={<ProfilePage />} />
        <Route exact path="/carrinho" element={<CartPage />} />
        <Route exact path="/pedido-em-andamento" element={<OnGoingPage />} />
        <Route
          exact
          path="/restaurantes/:restauranteId"
          element={<RestaurantPage />}
        />
        <Route exact path="/restaurantes" element={<SearchRestaurantPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;