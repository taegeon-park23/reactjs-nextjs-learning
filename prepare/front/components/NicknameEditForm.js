import { Form, Input } from 'antd';
import React from 'react';
import styled from 'styled-components';

const NickNameEditFormWrapper = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 30px;
`;

const NickNameEditForm = () => {
  return (
    <NickNameEditFormWrapper>
      <Input.Search addonBefore="nickname" enterButton="update"></Input.Search>
    </NickNameEditFormWrapper>
  );
};

export default NickNameEditForm;
