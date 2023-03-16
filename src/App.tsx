import { Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/auth/LoginPage";

import { PrivateRoute } from "./utils/router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
