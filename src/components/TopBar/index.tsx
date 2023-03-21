import {
  DarkMode,
  LightMode,
  NotificationsNone,
  Search,
} from "@mui/icons-material";
import { Box, Grid, IconButton, InputBase, useTheme } from "@mui/material";
import { FC, useContext } from "react";

import { ColorModeContext } from "@/common/theme";

import { useStyles } from "./styles";

const TopBar: FC = () => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid>Привет !</Grid>
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
    </Box>
  );
};

export default TopBar;
