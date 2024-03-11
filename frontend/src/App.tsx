import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "./Theme/globalStyle";
import lightTheme from "./Theme/lightTheme";
import darkTheme from "./Theme/darkTheme";
import Header from "./Components/Header/Header";
import Routing from "./Components/Routing";
import Footer from "./Components/Footer/Footer";

function App() {
  const [theme, setTheme] = React.useState<DefaultTheme>(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <header>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <Header />
        </header>

        <main>
          <Routing />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
