import {
  AutoGraphOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuBookOutlined,
  SettingsOutlined,
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

import { ISideBar } from "@/common/types/sideBar";

import { useStyles } from "./styles";

const SideBar: FC<ISideBar> = (props: ISideBar) => {
  const [active, setActive] = useState("");
  const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
  //const classes = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

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
          <Box width="100%">
            <Box>
              <FlexBetween>
                <Box display="flex" alignItems="center" gap="10px">
                  <Typography>Demo</Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <ChevronLeftOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBar;
