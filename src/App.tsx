import { Route, Routes } from "react-router-dom";

import { AuthRootComponent } from "@/components/auth/AuthRootComponent";
import { Home } from "@/components/home";
import { Header } from "@/components/layout/Header";

import { PrivateRoute } from "./utils/router";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="login" element={<AuthRootComponent />} />
        <Route path="register" element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
