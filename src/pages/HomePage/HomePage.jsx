import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      HomePage
      <br />
      <button onClick={() => goToLoginPage(navigate)}>Ir para login</button>
    </div>
  );
};
export default HomePage;
