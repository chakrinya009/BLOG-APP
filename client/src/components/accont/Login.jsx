import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { API } from "../../service/api";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  height: 48px;
`;

const SignupButton = styled(Button)`
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  color: #878787;
  margin-top: 15px;
`;
const signupInitialValue = {
  name: "",
  username: "",
  password: "",
};

const Login = () => {
  const [account, toggleAccount] = useState("login");

  const [signup, setsignup] = useState(signupInitialValue);

  const toggelSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupuser = async () => {
    let response = await API.userSignup(signup);
    console.log(response);
  };

  return (
    <Component>
      <Image src="blog.png" alt="" />
      {account === "login" ? (
        <Wrapper>
          <TextField variant="standard" label="Enter username" />
          <TextField variant="standard" label="Enter password" />
          <LoginButton variant="contained">Login</LoginButton>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <SignupButton onClick={() => toggelSignup()}>
            Create an account
          </SignupButton>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextField
            variant="standard"
            name="name"
            onChange={(e) => onInputChange(e)}
            label="Enter Name"
          />
          <TextField
            variant="standard"
            name="username"
            onChange={(e) => onInputChange(e)}
            label="Enter username"
          />
          <TextField
            variant="standard"
            name="password"
            onChange={(e) => onInputChange(e)}
            label="Enter password"
          />
          <SignupButton
            onClick={() => {
              signupuser();
            }}
            variant="contained"
          >
            Signup
          </SignupButton>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <LoginButton onClick={() => toggelSignup()}>
            Already have an account
          </LoginButton>
        </Wrapper>
      )}
    </Component>
  );
};

export default Login;
