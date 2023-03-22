import {
  DarkMode,
  LightMode,
  MenuOutlined,
  NotificationsNone,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useContext } from "react";

import FlexBetween from "@/components/FlexBetween";

import { ColorModeContext } from "@/common/theme";
import { ITopBarProps } from "@/common/types/topbar";

import { useStyles } from "./styles";

const TopBar: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
  const { isOpen, setIsOpen } = props;
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
        <FlexBetween>
          <MenuOutlined
            className={classes.menuIcon}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Typography variant="h3">Привет Андрей!</Typography>
        </FlexBetween>
        <Box display="flex">
          <Grid className={classes.iconBlock}>
            <IconButton
              className={classes.themeIcon}
              onClick={colorMode.toggleColorMode}
            >
              {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
            </IconButton>
            <IconButton>
              <NotificationsNone />
            </IconButton>
          </Grid>
          <Grid className={classes.searchBlock}>
            <IconButton className={classes.searchIcon}>
              <Search />
            </IconButton>
            <InputBase className={classes.searchInput} placeholder="Поиск" />
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
