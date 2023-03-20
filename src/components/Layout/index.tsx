import { Box, useMediaQuery } from "@mui/material";
import { FC, useState } from "react";
import { useLocation } from "react-router-dom";

import { ILayout } from "@/common/types/layout";

import SideBar from "../SideBar";
import TopBar from "../TopBar";

import styles from "./Layout.module.scss";

const Layout: FC<ILayout> = ({ children }: ILayout) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const isNonMobile = useMediaQuery("(min-width: 768px)");

  return location.pathname === "/login" || location.pathname === "/register" ? (
    <>{children}</>
  ) : (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
        isNonMobile={isNonMobile}
        drawerWidth="250"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Box>
        <TopBar />
        {children}
      </Box>
    </Box>
  );
};
export default Layout;
