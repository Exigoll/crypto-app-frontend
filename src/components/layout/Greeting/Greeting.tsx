import React from "react";

import styles from "./Greeting.module.scss";

interface IGreeting {
  userName: string;
}

export const Greeting: React.FC<IGreeting> = ({ userName }) => {
  return (
    <div>
      <h3>Hello {userName}</h3>
    </div>
  );
};
