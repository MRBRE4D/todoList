import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = {
  colors: {
    primary: "#6B80C2",
    primary_info: "#9393ff",
    primary_light: "#e9e8ff",
    primary_success: "#d1cfff",
    light: "#FBFBFF",
  },
};

root.render(
  <ThemeProvider theme={theme}>
      <App style = {{height:"100vh"}}/>
    </ThemeProvider>
);
