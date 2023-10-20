import { ChevronLeftOutlined, LogoutOutlined } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import FlexBetween from "@/components/FlexBetween";

import Logo from "@/assets/images/side-bar/logo.svg";

import { navMenu } from "@/common/moks/navigate";
import { ISideBarProps } from "@/common/types/sidebar";

import { SearchBar } from "../SearchBar";
import { ThemeSwitcher } from "../ThemeSwitcher";

import { useStyles } from "./styles";

const SideBar: FC<ISideBarProps> = (props: ISideBarProps): JSX.Element => {
  const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
  const [active, setActive] = useState("");
  const classes = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const handleLogout = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const renderNavMenu = navMenu.map(
    (item): JSX.Element => (
      <ListItem key={item.id}>
        <ListItemButton
          className={
            active === item.path
              ? `${classes.navItem} ${classes.active}`
              : classes.navItem
          }
          onClick={() => navigate(`${item.path}`)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>
            <Typography variant="body1">{item.title}</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    )
  );

  return (
    <Box component="nav">
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box className={classes.navBlock}>
            <Box>
              <FlexBetween>
                <Box className={classes.brand}>
                  <img src={Logo} alt="Logo" />
                  <Typography
                    className={classes.brandTitle}
                    variant="h1"
                    sx={{ fontSize: 30 }}
                  >
                    CryptoPro
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <ChevronLeftOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {!isNonMobile && (
                <ListItem>
                  <SearchBar />
                </ListItem>
              )}
            </List>
            <List className={classes.navList}>{renderNavMenu}</List>
          </Box>
          <Box width="100%">
            <List>
              {!isNonMobile && (
                <ListItem>
                  <Box padding="5px">
                    <ThemeSwitcher />
                  </Box>
                </ListItem>
              )}
              <ListItem>
                <ListItemButton
                  className={classes.navItem}
                  onClick={handleLogout}
                >
                  <ListItemIcon>
                    <LogoutOutlined />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Выход</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBar;
