import { Button, TextField, Typography } from "@mui/material";
import React from "react";

import { IPropsLogin } from "@/common/types/auth";

const Login: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { navigate, register, errors } = props;

  return (
    <>
      <Typography
        sx={{
          fontFamily: "Poppins",
          textAlign: "center",
        }}
        variant="h3"
      >
        Авторизация
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins",
          textAlign: "center",
          marginBottom: 3,
        }}
        variant="body1"
      >
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
      <Button
        sx={{
          fontFamily: "Poppins",
          marginTop: 2,
          marginBottom: 2,
          width: "60%",
        }}
        type="submit"
        variant="contained"
      >
        Вход
      </Button>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins",
        }}
      >
        У Вас нет аккаунта?
        <span className="incitingText" onClick={() => navigate("/register")}>
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default Login;
