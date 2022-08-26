import { List, Card, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const FollowerListWrapper = styled(List)`
  margin-bottom: 20;
`;
const FollowerList = ({ header, data, onClickMore, loading }) => {
  return (
    <FollowerListWrapper
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      bordered
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button onClick={onClickMore} loading={loading}>
            더 보기
          </Button>
        </div>
      }
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    ></FollowerListWrapper>
  );
};

export default FollowerList;
