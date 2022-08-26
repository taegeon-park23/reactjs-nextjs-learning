import { Form, Input } from "antd";
import React, { useMemo } from "react";
import styled from "styled-components";

const NickNameEditFormWrapper = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 30px;
`;

const NickNameEditForm = (first) => {
  return (
    <Form>
      <Input.Search addonBefore="nickname" enterButton="update"></Input.Search>
    </Form>
  );
};

export default NickNameEditForm;
