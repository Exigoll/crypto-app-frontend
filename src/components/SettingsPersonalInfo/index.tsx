import { Box, Grid, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";

import LoadingButton from "@/components/LoadingButton";

import { getPublicUser, updateUserInfo } from "@/store/thunks/auth";

import { useAppDispatch, useAppSelector } from "@/utils/hooks";

import { useStyles } from "./styles";

const SettingsPersonalInfo: FC = (): JSX.Element => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const { user } = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      setName(user.firstName);
      setUserName(user.userName);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      firstName: name,
      userName: userName,
      email: email,
    };
    dispatch(updateUserInfo(data));
    dispatch(getPublicUser());
  };

  return (
    <Grid
      component="form"
      noValidate
      autoComplete="off"
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <Box className={classes.formWrapper}>
        <TextField
          className={classes.inputField}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          label="Имя"
          variant="outlined"
        />
        <TextField
          className={classes.inputField}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          label="Username"
          variant="outlined"
        />
        <TextField
          className={classes.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          label="Email"
          variant="outlined"
        />
        <Box className={classes.buttonBlock}>
          <LoadingButton type="submit">Сохранить</LoadingButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default SettingsPersonalInfo;
