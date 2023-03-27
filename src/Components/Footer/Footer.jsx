import React from "react";
import styles from "./footer.module.css";
import img from "../../Assets/dogs-footer.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <img className={styles.img} src={img} />
      <p>Tiago Figueiredo FrontEnd Developer</p>
    </div>
  );
}

export default Footer;
