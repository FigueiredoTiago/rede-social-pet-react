import React from "react";
import Image from "../Helper/image";
import styles from "./FeedPhotosItem.module.css";
import Loading from "../Helper/Loading";

import { useDispatch, useSelector } from "react-redux";
import { openModal  } from "../../store/reducers/ui";
import { fetchPhoto } from "../../store/reducers/photo";


const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();
  

  function handleClick() {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;   
