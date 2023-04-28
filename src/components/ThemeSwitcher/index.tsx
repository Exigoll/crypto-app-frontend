import { DarkMode, LightMode, NotificationsNone } from "@mui/icons-material";
import { Grid, IconButton, useTheme } from "@mui/material";
import { FC, useContext } from "react";

import { ColorModeContext } from "@/common/theme";

import { useStyles } from "./styles";

export const ThemeSwitcher: FC = (): JSX.Element => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();

  return (
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
  );
};
