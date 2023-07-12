import React from "react";
import styles from "./FeedModal.module.css";
import Loading from '../Helper/Loading';
import PhotoContent from "../Photo/PhotoContent";

import { useSelector, useDispatch } from "react-redux";
import { fetchPhoto } from "../../store/reducers/photo";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { loading, error, data } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [dispatch, photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <p>{error}</p> }
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
