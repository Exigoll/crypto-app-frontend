import { MenuOutlined, Search } from "@mui/icons-material";
import { AppBar, Grid, Toolbar, Typography, useTheme } from "@mui/material";
import { FC } from "react";

import FlexBetween from "@/components/FlexBetween";

import { ITopBarProps } from "@/common/types/topbar";

import { SearchBar } from "../SearchBar";
import { ThemeSwitcher } from "../ThemeSwitcher";

import { useStyles } from "./styles";

const TopBar: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
  const { isOpen, setIsOpen, isNonMobile } = props;
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sm={3} lg={3}>
            <FlexBetween>
              <MenuOutlined
                className={classes.menuIcon}
                onClick={() => setIsOpen(!isOpen)}
              />
              <Typography variant="h3">
                Добро пожаловать, {sessionStorage.getItem("name")}
              </Typography>
            </FlexBetween>
          </Grid>
          {isNonMobile && (
            <Grid display="flex" justifyContent="flex-end" item sm={9} lg={9}>
              <ThemeSwitcher />
              <SearchBar />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
