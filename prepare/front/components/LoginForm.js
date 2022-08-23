import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import Link from "next/link";

const FormWrapper = styled(Form)`
  padding: 10px;
`;
/**
 * Div tag Component with css style applied
 * 성능에 크게 영향이 없다면 inline style 객체를 써도 된다.
 * 성능에 신경을 쓰고 싶다면 useMemo(값을 캐싱)를 써도 된다.
 * @see https://react.vlpt.us/basic/17-useMemo.html
 */
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

/** useMemo 사용
 * reRendering 최적화(객체 캐싱)
 */
// const style = useMemo(() => ({ marginTop: 10 }), []);

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  /** component에 props로 넘겨주는 useCallback(함수를 캐싱)을 써야지
   *  최적화가 진행된다.
   * @see https://react.vlpt.us/basic/18-useCallback.html
   */
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      // antd에서는 이미 적용되어 있다.
      // e.preventDefault();
      setIsLoggedIn(true);
    },
    [id, password]
  );

  /**
   * virtual dom - 처음에는 Component 전체부분을 실행시키고 화면에 그려준다.(렌더링)
   * 이후, state, props의 변화에 따라 re-rendering을 수행할 때, virtual-dom에서 기존 부분과의 차이를 비교하고
   * 달라진 부분만 다시 그려준다.
   */
  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">ID</label>
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        ></Input>
      </div>
      {/* <div style={{ marginTop: 10 }}> {} !== {}, style때문에 rerendering이 되어버린다.*/}
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          Login
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
