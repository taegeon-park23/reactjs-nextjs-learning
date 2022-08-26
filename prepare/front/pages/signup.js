import { Form, Input, Checkbox, Button } from "antd";
import Head from "next/head";
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";

const ErrorMessage = styled.span`
  color: red;
`;

const SignUp = () => {
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
  }, [email, password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>signup</Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">email</label>
          <br />
          <Input
            name="user-email"
            type="email"
            value={email}
            required
            onChange={onChangeEmail}
          ></Input>
        </div>
        <div>
          <label htmlFor="user-nick">nickname</label>
          <br />
          <Input
            name="user-nick"
            value={nickname}
            required
            onChange={onChangeNickname}
          ></Input>
        </div>
        <div>
          <label htmlFor="user-password">password</label>
          <br />
          <Input
            name="user-password"
            type="password"
            required
            value={password}
            onChange={onChangePassword}
          ></Input>
        </div>
        <div>
          <label htmlFor="user-password-check">password check</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            제로초 말을 잘 들을 것을 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default SignUp;
