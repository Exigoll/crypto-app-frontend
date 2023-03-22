import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { AppErrors } from "@/common/errors";

import { login } from "@/store/slice/auth";

import { instance } from "@/utils/axios";
import { useAppDispatch } from "@/utils/hooks";

import Login from "./Login";
import Register from "./Register";
import "./style.scss";

const AuthRoot: React.FC = (): JSX.Element => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
      if (password === repeatPassword) {
        try {
          const userData = {
            firstName,
            userName,
            email,
            password,
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
    <div className="root">
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={`5px 5px 10px #ccc`}
        >
          {location.pathname === "/login" ? (
            <Login navigate={navigate} register={register} errors={errors} />
          ) : location.pathname === "/register" ? (
            <Register
              setEmail={setEmail}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setFirstName={setFirstName}
              setUserName={setUserName}
              navigate={navigate}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRoot;
