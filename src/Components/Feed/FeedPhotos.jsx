import React from "react";
import styles from "./FeedPhoto.module.css";
import useFetch from "../Hooks/useFetch";
import { PHOTOS_GET } from "../Hooks/Api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import FeedPhotosItem from './FeedPhotosItem';
const FeedPhotos = ({user, setModalPhoto, page, setInfinity}) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });

      const { response, json } = await request(url, options);
      console.log('request', json);
      if(response && response.ok && json.length < total) {
        setInfinity(false);
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinity]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map((photo) => (
        <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
      ))}
    </ul>
  );
  else return null;
};

export default FeedPhotos;
