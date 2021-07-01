import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import App from "App";
import store from "store";
import theme from "styles/theme";
import BaseStyles from "styles/global";
import FontsStyles from "styles/fonts";

const GlobalStyles = createGlobalStyle`
${BaseStyles}
${FontsStyles}
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
