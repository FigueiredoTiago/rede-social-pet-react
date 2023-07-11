import styles from './styles/login.module.css';
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginForm'
import NotFound from '../NotFound/NotFound';
import Head from "./../Helper/Head";

import { useSelector } from 'react-redux';
import Loading from '../Helper/Loading';

function Login() {

  const { data, loading } = useSelector(state => state.user);
  if( loading ) return <Loading />;
  if( data ) {
    return <Navigate to='/conta' />
  }
  return (
    <section className={styles.login}>
      <Head title='Login ' />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login