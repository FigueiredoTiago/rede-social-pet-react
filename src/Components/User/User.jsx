import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import { UserContext } from "../Hooks/UserContext";
import NotFound from '../NotFound/NotFound';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import Head from "./../Helper/Head";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title='Minha conta' />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default User