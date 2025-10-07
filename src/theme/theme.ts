"use client";
import { createTheme } from "@mui/material/styles";

export const getTheme = (darkMode: boolean) => {
  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      ...(darkMode
        ? {
            // 🎨 Tema oscuro
            primary: { main: "#1a1a1a" },
            secondary: { main: "#ff9800" },
            background: { default: "#242424", paper: "#231f20" },
          }
        : {
            // 🎨 Tema corporativo Digitel
            primary: { main: "#e5e5e5" }, // Rosa Digitel
            secondary: { main: "#ff9800" }, // Naranja complementario
            background: { default: "#ffffff", paper: "#f5f5f5" },
          }),
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h6: {
        fontWeight: 700,
      },
    },
    shape: {
      borderRadius: 8,
    },
  });
};
