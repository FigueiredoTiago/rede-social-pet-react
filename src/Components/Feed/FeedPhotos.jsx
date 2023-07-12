import styles from "./FeedPhoto.module.css";
import FeedPhotosItem from "./FeedPhotosItem";
import { useSelector } from "react-redux";

const FeedPhotos = ({ setModalPhoto }) => {
  const { list } = useSelector((state) => state.feed);
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {list.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
};

export default FeedPhotos;
