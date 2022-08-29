import React, { useCallback } from 'react';
import { Button, Card, Avatar } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';
const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card actions={[<div key="twit">twit</div>]}>
      <Card.Meta avatar={<Avatar>TM</Avatar>} title="Taenamoo"></Card.Meta>
      <Button onClick={onLogOut}>Logout</Button>
    </Card>
  );
};

export default UserProfile;
