import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <div className="App">
        <GlobalStyles />
        <div className="main-content">
          <Main theme={chosenTheme} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
