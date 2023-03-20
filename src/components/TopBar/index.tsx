import {
  DarkMode,
  LightMode,
  NotificationsNone,
  Search,
} from "@mui/icons-material";
import { Box, Grid, IconButton, InputBase, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "theme";

import { useStyles } from "./styles";

const TopBar: React.FC = () => {
  /* const { user } = useAppSelector((state) => state.auth.user); */
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" px="32px" py="24px">
      <Grid>Welcome Andrew {/* {user.firstName} */}</Grid>
      <Box display="flex">
        <Grid
          sx={{ pr: "37px", borderRight: `1px solid ${colors.borderColor}` }}
        >
          <IconButton sx={{ mr: "45px" }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
          </IconButton>
          <IconButton>
            <NotificationsNone />
          </IconButton>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            backgroundColor: `${colors.primary[600]}`,
            borderRadius: "8px",
            ml: "28px",
          }}
        >
          <IconButton className={classes.root}>
            <Search />
          </IconButton>
          <InputBase sx={{ p: "0" }} placeholder="Поиск" />
        </Grid>
      </Box>
    </Box>
  );
};

export default TopBar;
