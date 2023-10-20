import { TextField, Typography } from "@mui/material";
import React from "react";

import AppLoadingButton from "@/components/LoadingButton";

import { IPropsLogin } from "@/common/types/auth";

import { useStyles } from "../styles";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { navigate, register, errors, loading } = props;
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" textAlign="center" fontSize="32px">
        Авторизация
      </Typography>
      <Typography variant="body1" textAlign="center" marginBottom="3px">
        Введите логин и пароль
      </Typography>
      <TextField
        margin="normal"
        fullWidth={true}
        type="email"
        label="E-mail"
        placeholder="Введите E-mail"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email ? `${errors.email.message}` : ""}
        {...register("email")}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="password"
        label="Пароль"
        placeholder="Введите пароль"
        variant="outlined"
        error={!!errors.password}
        helperText={errors.password ? `${errors.password.message}` : ""}
        {...register("password")}
      />
      <AppLoadingButton type="submit" variant="contained" loading={loading}>
        Войти
      </AppLoadingButton>
      <Typography variant="body1">
        У Вас нет аккаунта?
        <span
          className={classes.incitingText}
          onClick={() => navigate("/register")}
        >
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
