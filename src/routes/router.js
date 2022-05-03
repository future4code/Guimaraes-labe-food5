import React from "react";
import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import OnGoingPage from "../pages/OnGoingPage/OnGoingPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import SearchRestaurantPage from "../pages/SearchRestaurantPage/SearchRestaurantPage";
import SignUpPage from "../pages/SingUpPage/SignUpPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import EditProfile from "../pages/ProfilePage/EditProfile";
import EditAddres from "../pages/ProfilePage/EditAddres";
import Navigation from "../components/Navigation/Navigation";

const Container = styled.div``;

const Router = () => {
  const location = useLocation()

  const checkPage = () => {
    if (location.pathname === '/') return false
    if (location.pathname === '/login') return false
    if (location.pathname === '/cadastro') return false
    return true
  }

  return (
    <Container>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/cadastro" element={<SignUpPage />} />
        <Route exact path="/perfil/:id" element={<ProfilePage />} />
        <Route exact path="/editProfile" element={<EditProfile />}/>
        <Route exact path="/editAddress" element={<EditAddres />}/>
        <Route exact path="/home" element={<FeedPage />} />
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
      {checkPage() ? (
        <Navigation />
      ) : null}
      
    </Container>
  );
};
export default Router;
