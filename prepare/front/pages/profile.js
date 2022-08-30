import Head from 'next/head';
import React from 'react'; // 제외해도 가능
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import NickNameEditForm from '../components/NicknameEditForm';

const followerList = [
  { nickname: 'zerocho' },
  { nickname: 'teanomoo' },
  { nickname: 'hello' },
];
const followingList = [
  { nickname: 'zerocho' },
  { nickname: 'teanomoo' },
  { nickname: 'hello' },
];
const Profile = () => {
  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <AppLayout>
        <NickNameEditForm></NickNameEditForm>
        <FollowList header="following list" data={followingList}></FollowList>
      </AppLayout>
    </>
  );
};

export default Profile;
