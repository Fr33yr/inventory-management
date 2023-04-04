import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
//import { themeSettings } from "theme";
import Layout from "./components/common/layout/Layout";
import { useSelector } from "react-redux";
import { Breakdown, Dashboard,Products,Transactions,Performance,Admin } from "./pages";

function App() {
  // const mode = useSelector((state:any)=>state.global.mode);
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashborad" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/perfomance" element={<Performance />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
