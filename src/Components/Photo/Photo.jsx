import React from "react";
import { useParams } from "react-router-dom";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";  
import Head from "./../Helper/Head";

import { useSelector, useDispatch } from "react-redux";
import { fetchPhoto } from "../../store/reducers/photo";

const Photo = () => {
  const { id } = useParams();
  const {loading, error, data} = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [fetchPhoto, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} />
      </section>
    );
  else return null;
};

export default Photo;
