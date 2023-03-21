import { Button, TextField, Typography } from "@mui/material";
import React from "react";

import { IPropsRegister } from "@/common/types/auth";

const Register: React.FC<IPropsRegister> = ({
  setEmail,
  setPassword,
  setRepeatPassword,
  setFirstName,
  setUserName,
  navigate,
}: IPropsRegister): JSX.Element => {
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
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="text"
        label="Логин"
        placeholder="Введите Ваш логин"
        variant="outlined"
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="email"
        label="E-mail"
        placeholder="Введите E-mail"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="password"
        label="Пароль"
        placeholder="Введите пароль"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth={true}
        type="password"
        label="Пароль"
        placeholder="Повторите пароль"
        variant="outlined"
        onChange={(e) => setRepeatPassword(e.target.value)}
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
