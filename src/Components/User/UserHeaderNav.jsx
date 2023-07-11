import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import AdicionarFoto from "../../Assets/adicionar.svg";
import Sair from "../../Assets/sair.svg";

import styles from "./UserHeaderNav.module.css";
import useMedia from "../Hooks/useMedia";

import { useDispatch } from "react-redux";
import { userLogout } from "../../store/reducers/user";

const UserHeaderNav = () => {
  const dispatch = useDispatch();



  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const {pathname} = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>

        <NavLink to="/conta" end>
          <img src={MinhasFotos} /> {mobile && "Minhas Fotos"}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          <img src={Estatisticas} /> {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <img src={AdicionarFoto} /> {mobile && "Adicionar Foto"}
        </NavLink>

        <button onClick={() => dispatch(userLogout())}>
          <img src={Sair} />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
