import { List, Card, Button } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const FollowerListWrapper = styled(List)`
  margin-bottom: 20;
`;
const FollowerList = ({ header, data, onClickMore, loading }) => {
  return (
    <FollowerListWrapper
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button>더 보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: '20px' }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    ></FollowerListWrapper>
  );
};

export default FollowerList;
