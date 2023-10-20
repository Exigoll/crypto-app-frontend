import { MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

import FlexBetween from "@/components/FlexBetween";
import { SearchBar } from "@/components/SearchBar";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import { ITopBarProps } from "@/common/types/topbar";

import { useAppSelector } from "@/utils/hooks";

import { useStyles } from "./styles";

const TopBar: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
  const { isOpen, setIsOpen, isNonMobile } = props;
  const classes = useStyles();
  const { user } = useAppSelector((state) => state.auth.user);

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
                Welcome, {user ? `${user.firstName}` : ""}
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
