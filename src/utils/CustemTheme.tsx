import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const green = "#18BA51";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 660,
      lg: 1200,
      xl: 1620,
    },
  },
  palette: {
    primary: {
      main: green,
      dark: "#000000",
      light: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontSize: "55px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "90%",
      letterSpacing: "0.55px",
    },
    h2: {
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h3: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 590,
      lineHeight: "normal",
      textDecorationLine: "underline",
    },
    h4: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    h5: {
      fontSize: "28px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h6: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
  },
});

export const CustemThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
