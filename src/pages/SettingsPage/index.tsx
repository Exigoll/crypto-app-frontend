import { Box, Grid, Tab, Tabs, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";

import ChangePassword from "@/components/ChangePassword";
import DeleteUser from "@/components/DeleteUser";
import SettingsPersonalInfo from "@/components/SettingsPersonalInfo";
import TabPanel from "@/components/TabPanel";

import { tokens } from "@/common/theme";

import { getPublicUser } from "@/store/thunks/auth";

import { tabProps } from "@/utils/helpers";
import { useAppDispatch } from "@/utils/hooks";

import { useStyles } from "./styles";

const SettingsPage: FC = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPublicUser());
  }, [dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
      <Box className={classes.tabsWrapper}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Settings tabs"
          centered
          textColor="secondary"
          TabIndicatorProps={{
            style: {
              backgroundColor: colors.blue,
            },
          }}
        >
          <Tab label="Персональные данные" {...tabProps(0)} />
          <Tab label="Изменить пароль" {...tabProps(1)} />
          <Tab label="Удалить аккаунт" {...tabProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SettingsPersonalInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChangePassword />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DeleteUser />
      </TabPanel>
    </Grid>
  );
};

export default SettingsPage;
