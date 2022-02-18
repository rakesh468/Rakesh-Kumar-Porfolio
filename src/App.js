import "./App.css"
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import {Home} from "./components/Home/Home";

function App() {
  const [mode, setmode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
       <Paper elevation={2} style={{ borderRadius: "0px", minHeight: "100vh" }}>
    <div className="App">
    <Button
              variant="text"
              color="inherit"
              style={{ marginLeft: "auto" }}
              onClick={() => setmode(mode === "light" ? "dark" : "light")}
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
            >
              {mode === "light" ? "dark" : "light"} mode
            </Button>
     <Home/>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;