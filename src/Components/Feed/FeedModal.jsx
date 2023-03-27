import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET } from "../Hooks/Api";
import Loading from '../Helper/Loading';
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);

    request(url, options);
  }, [photo, request]);

  function handleOutSideClick(event) {
    if(event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutSideClick}>
      {error && <p>{error}</p>}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
