import { Button, TextField, Typography } from "@mui/material";
import React from "react";

import { IPropsRegister } from "@/common/types/auth";

const Register: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
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
        Регистрация
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins",
          textAlign: "center",
          marginBottom: 3,
        }}
        variant="body1"
      >
        Введите данные для регистрации
      </Typography>
      <TextField
        margin="normal"
        fullWidth={true}
        type="text"
        label="Имя"
        placeholder="Введите Ваше имя"
        variant="outlined"
        error={!!errors.firstName}
        helperText={errors.firstName ? `${errors.firstName.message}` : ""}
        {...register("firstName")}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="text"
        label="Логин"
        placeholder="Введите Ваш логин"
        variant="outlined"
        error={!!errors.userName}
        helperText={errors.userName ? `${errors.userName.message}` : ""}
        {...register("userName")}
      />
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
      <TextField
        margin="normal"
        fullWidth={true}
        type="password"
        label="Пароль"
        placeholder="Повторите пароль"
        variant="outlined"
        error={!!errors.confirmPassword}
        helperText={
          errors.confirmPassword ? `${errors.confirmPassword.message}` : ""
        }
        {...register("confirmPassword")}
      />
      <Button
        sx={{
          fontFamily: "Poppins",
          marginTop: 2,
          marginBottom: 2,
          width: "60%",
        }}
        variant="contained"
        type="submit"
      >
        Регистрация
      </Button>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins",
        }}
      >
        У Вас уже есть аккаунт?
        <span className="incitingText" onClick={() => navigate("/login")}>
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default Register;
