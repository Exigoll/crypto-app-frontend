import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900">
      <nav className="flex justify-center gap-x-[20px] text-white text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  );
};
