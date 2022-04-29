import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import {
  goToLoginPage,
  goToSearchRestaurantPage,
} from "../../routes/coordinator";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { StyledToolbar } from "./styledHeader";

const Header = () => {
  const { states, setters } = useContext(GlobalStateContext);

  const { rightButtonText } = states;
  const { setRightButtonText } = setters;

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("token");
  };
  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLoginPage(navigate);
    } else {
      goToLoginPage(navigate);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button
            color="inherit"
            onClick={() => goToSearchRestaurantPage(navigate)}
          >
            Future Eats
          </Button>
          <Button color="inherit" onClick={() => rightButtonAction()}>
            {rightButtonText}
          </Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
