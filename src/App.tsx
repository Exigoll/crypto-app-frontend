import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Layout from "@/components/Layout";

import AuthRootPage from "@/pages/AuthRootPage";
import HomePage from "@/pages/HomePage";
import NewsPage from "@/pages/NewsPage";
import SettingsPage from "@/pages/SettingsPage";
import WatchlistPage from "@/pages/WatchlistPage";

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
                <Route path="/" element={<HomePage />} />
                <Route path="/watchlist" element={<WatchlistPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Route>
              <Route path="login" element={<AuthRootPage />} />
              <Route path="register" element={<AuthRootPage />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
