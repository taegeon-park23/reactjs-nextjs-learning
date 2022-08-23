import React, { useCallback } from "react";
import { Button, Card, Avatar } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card actions={[<div key="twit">twit</div>]}>
      <Card.Meta avatar={<Avatar>TM</Avatar>} title="Taenamoo"></Card.Meta>
      <Button onClick={onLogOut}>Logout</Button>
    </Card>
  );
};

export default UserProfile;
