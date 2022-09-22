import { deepPurple, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[600],
    },
    text: {
      primary: grey[800],
    },
  },
});

export default theme;
