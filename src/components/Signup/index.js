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
  LoginBtn,
} from "./SignupElements.js";
import { useSignupMutation } from "../../services/appApi.js";
import { Alert } from "bootstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signup, { error, isLoading, isError }] = useSignupMutation();

  function handleSignup(e) {
    e.preventDefault();
    signup({ name, email, password });
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">The Giving Table</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleSignup}>
              {/* {isError && <Alert variant="danger">{error.data}</Alert>} */}
              <FormH1 type="submit" disabled={isLoading}>
                Create an account
              </FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput
                type="name"
                placeholder="Enter name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
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
              <FormButton type="submit">Create</FormButton>
              <LoginBtn to="/login">Back to login</LoginBtn>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
