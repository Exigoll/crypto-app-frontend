import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { AppErrors } from "@/common/errors";

import { login } from "@/store/slice/auth";

import { instance } from "@/utils/axios";
import { useAppDispatch } from "@/utils/hooks";
import { LoginSchema, RegisterSchema } from "@/utils/validation";

import Login from "./Login";
import Register from "./Register";
import { useStyles } from "./styles";

const AuthRoot: FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
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
        const userData = {
          email: data.email,
          password: data.password,
        };
        const user = await instance.post("/auth/login", userData);
        await dispatch(login(user.data));
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
          const newUser = await instance.post("/auth/register", userData);
          await dispatch(login(newUser.data));
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
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={`-3px -2px 20px 1px #202020`}
        >
          {location.pathname === "/login" ? (
            <Login navigate={navigate} register={register} errors={errors} />
          ) : location.pathname === "/register" ? (
            <Register navigate={navigate} register={register} errors={errors} />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRoot;
