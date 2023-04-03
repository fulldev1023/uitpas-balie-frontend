import { createTheme } from "@mui/system";

export const theme = createTheme({
  palette: {
    primary: {
      contrastText: "#fff",
      main: "#2a4b9c",
      darker: "#1a2e60",
    },
    grey: {
      400: "#ddd",
      600: "#8a8a8d",
      900: "#2f3b4d",
    },
    text: {
      contrastText: "#fff",
    },
  },
  typography: {
    h1: {
      fontSize: "2em",
      margin: "0.67em 0",
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.1,
    },
  },
});
