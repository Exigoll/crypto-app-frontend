import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "theme";

import AuthRoot from "@/components/AuthRoot";
import Home from "@/components/Home";
import Layout from "@/components/Layout";

import { PrivateRoute } from "@/utils/router";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <div className="App">
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="login" element={<AuthRoot />} />
              <Route path="register" element={<AuthRoot />} />
            </Routes>
          </div>
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
