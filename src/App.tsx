import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import AuthRoot from "@/components/AuthRoot";
import Layout from "@/components/Layout";

import Home from "@/pages/Home";
import News from "@/pages/News";
import Settings from "@/pages/Settings";
import Watchlist from "@/pages/Watchlist";

import { ColorModeContext, useMode } from "@/common/theme";

import { PrivateRoute } from "@/utils/router";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Routes>
            <Route element={<Layout />}>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/news" element={<News />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
              <Route path="login" element={<AuthRoot />} />
              <Route path="register" element={<AuthRoot />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
