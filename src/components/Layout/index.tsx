import { Box, useMediaQuery } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

import { getPublicUser } from "@/store/thunks/auth";

import { useAppDispatch } from "@/utils/hooks";

import { useStyles } from "./styles";

const Layout: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPublicUser());
  }, [dispatch]);

  return location.pathname === "/login" || location.pathname === "/register" ? (
    <>
      <Outlet />
    </>
  ) : (
    <Box
      display={isNonMobile ? "flex" : "block"}
      justifyContent="space-between"
      width="100%"
      height="100%"
    >
      <SideBar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Box className={classes.mainSection}>
        <TopBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isNonMobile={isNonMobile}
        />
        <Outlet />
      </Box>
    </Box>
  );
};
export default Layout;
