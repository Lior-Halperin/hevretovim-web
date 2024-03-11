import React from "react";
import styled, { ThemeProvider,DefaultTheme } from "styled-components";
import GlobalStyle from "./Theme/globalStyle";
import lightTheme from "./Theme/lightTheme";
import darkTheme from "./Theme/darkTheme";

function App() {
  const [theme, setTheme] = React.useState<DefaultTheme>(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const ThemedParagraph = styled.p`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    padding: 20px;
  `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="App">
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
