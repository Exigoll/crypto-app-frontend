import React from "react";

import { Greeting } from "@/components/layout/Greeting";

export const LoginPage: React.FC = () => {
  const userName = "Andrew";

  return (
    <div>
      <h1>Login</h1>
      <Greeting userName={userName} />
    </div>
  );
};
