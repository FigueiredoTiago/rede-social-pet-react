import React from "react";
import styles from "./FeedModal.module.css";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/reducers/ui";

const FeedModal = () => {
  const { modal } = useSelector((state) => state.ui);
  const { loading, error, data } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) dispatch(closeModal());
  }

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <p>{error}</p>}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
