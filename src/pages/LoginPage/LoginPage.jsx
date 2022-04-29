import React from "react";
import LoginForm from "./LoginForm";
import { goToSignUpPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { ScreenContainer, SignUpButtonContainer } from "./styledLogin";
import { Button } from "@mui/material";

const LoginPage = () => {
  useUnprotectedPage();
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUpPage(navigate)}
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Não possui cadastro? Clique aqui.
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
