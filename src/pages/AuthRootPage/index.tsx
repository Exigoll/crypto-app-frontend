import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import LoginPage from "@/pages/AuthRootPage/LoginPage";
import RegisterPage from "@/pages/AuthRootPage/RegisterPage";

import { AppErrors } from "@/common/errors";

import { loginUser, registerUser } from "@/store/thunks/auth";

import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { LoginSchema, RegisterSchema } from "@/utils/validation";

import { useStyles } from "./styles";

const AuthRootPage: FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const loading = useAppSelector((state) => state.auth.isLoading);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      location.pathname === "/login" ? LoginSchema : RegisterSchema
    ),
    mode: "onBlur",
  });

  const handleSubmitForm = async (data: any) => {
    if (location.pathname === "/login") {
      try {
        await dispatch(loginUser(data));
        navigate("/");
      } catch (e) {
        return e;
      }
    } else {
      if (data.password === data.confirmPassword) {
        try {
          const userData = {
            firstName: data.firstName,
            userName: data.userName,
            email: data.email,
            password: data.password,
          };
          await dispatch(registerUser(userData));
          navigate("/");
        } catch (e) {
          return e;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Box className={classes.wrapper}>
          {location.pathname === "/login" ? (
            <LoginPage
              navigate={navigate}
              register={register}
              errors={errors}
              loading={loading}
            />
          ) : location.pathname === "/register" ? (
            <RegisterPage
              navigate={navigate}
              register={register}
              errors={errors}
              loading={loading}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootPage;
