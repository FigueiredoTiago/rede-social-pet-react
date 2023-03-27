import styles from './styles/login.module.css';
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginForm'
import { UserContext } from '../Hooks/UserContext'
import NotFound from '../NotFound/NotFound';
import Head from "./../Helper/Head";

function Login() {
  const { login } = React.useContext(UserContext);
  if(login === true) {
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