import React, { useState } from "react";
import {
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Container,
  Icon,
  Text,
  SignUpBtn,
} from "./LoginElements";

import { useLoginMutation } from "../../services/appApi";

import { Alert } from "bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isError, isLoading, error }] = useLoginMutation();

  function handleLogin(e) {
    e.preventDefault();
    login({ email, password });
  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">The Giving Table</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleLogin}>
              <FormH1>Log in to your account</FormH1>
              {/* {isError && <Alert variant="danger">{error.data}</Alert>} */}
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                placeholder="Enter Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type="submit" disabled={isLoading}>
                Log in
              </FormButton>
              {/* <FormButton type="submit" to="/">
                Log in
              </FormButton> */}
              <Text>Don't have an account?</Text>
              <SignUpBtn to="/signup">Create</SignUpBtn>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Login;
