import { createTheme } from "@mui/material/styles";
import {primaryColor, neutralColor} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    text: {
      primary: neutralColor,
    },
  },
});

export default theme