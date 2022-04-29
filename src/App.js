import React from "react"
import Router from "./routes/router"
import theme from "./constants/theme"
import { ThemeProvider } from "@mui/material/styles";

const App = () => {
  return (

    <ThemeProvider theme={theme}>
    <Router/>
    Teste
  </ThemeProvider>

  );
}

export default App;