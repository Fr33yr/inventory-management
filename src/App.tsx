import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";
//import { themeSettings } from "theme";
import { Layout } from "./components/common";
import { useSelector } from "react-redux";
import { Breakdown, Dashboard,Products,Transactions,Performance,Admin } from "./pages";

import Layout from "./components/common/layout/Layout";
import {
  Breakdown,
  Dashboard,
  Products,
  Transactions,
  Performance,
  Admin,
} from "./pages";


function App() {

  // const mode = useSelector((state:any)=>state.global.mode);
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashborad" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
