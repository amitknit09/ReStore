import Catalog from "../../features/Catalog/Catalog";
import { Container, CssBaseline, ThemeProvider, Typography, createTheme } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { DarkMode } from "@mui/icons-material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme(
    {
      palette: {
        mode: paletteType,  
        background: {
          default: paletteType==='light'?'#eaeaea':'#121212'
        }
      }
    }
  )
  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog></Catalog>
      </Container>
    </ThemeProvider>
  );
}

export default App;
