import Head from "next/head";
import React from "react"; // 제외해도 가능
import AppLayout from "../components/AppLayout";
import FollowerList from "../components/FollowerList";
import FollowingList from "../components/FollowingList";
import NickNameEditForm from "../components/NicknameEditForm";

const followerList = [
  { nickname: "zerocho" },
  { nickname: "teanomoo" },
  { nickname: "hello" },
];
const followingList = [
  { nickname: "zerocho" },
  { nickname: "teanomoo" },
  { nickname: "hello" },
];
const Profile = () => {
  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <AppLayout>
        <NickNameEditForm></NickNameEditForm>
        <FollowerList
          header="following list"
          data={followingList}
        ></FollowerList>
        <FollowingList
          header="follower list"
          data={followerList}
        ></FollowingList>
      </AppLayout>
    </>
  );
};

export default Profile;
