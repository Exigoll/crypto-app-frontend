import {
  ChevronLeftOutlined,
  ChevronRightOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
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
import { ISideBar } from "@/common/types/sideBar";

import { useStyles } from "./styles";

const SideBar: FC<ISideBar> = (props: ISideBar) => {
  const [active, setActive] = useState("");
  const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
  const classes = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const renderNavMenu = navMenu.map(
    (item): JSX.Element => (
      <ListItem key={item.id}>
        <ListItemButton
          className={classes.navItem}
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
                  <Typography className={classes.brandTitle} variant="h1">
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
            <List className={classes.navList}>{renderNavMenu}</List>
          </Box>
          <Box width="100%">
            <List>
              <ListItem>
                <ListItemButton className={classes.navItem}>
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
