import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Buttom from "../Forms/Button";
import { useForm } from "react-hook-form";
import useFetch from "../Hooks/useFetch";
import { PHOTO_POST } from "../Hooks/Api";
import Error from '../Helper/Error';
import { useNavigate } from "react-router-dom";
import Head from './../Helper/Head';

const UserPhotoPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [img, setImg] = React.useState({});
  const {data, error, loading, request} = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(data) navigate('/conta');
  }, [data, navigate]);
  
  
  
  function onSubmit(data) {
    const nome = data.nome;
    const idade = data.idade;
    const peso = data.peso;

    const formData = new FormData();

    formData.append("nome", nome);
    formData.append("idade", idade);
    formData.append("peso", peso);
    formData.append('img', img.raw);

    const token = window.localStorage.getItem('token');
    const {url, options} = PHOTO_POST(formData, token);

    request(url, options);

  }

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title='Nova foto' />
      <div>
        <Input
          label="Nome:"
          type="text"
          name="nome"
          control={{ ...register("nome", { required: true }) }}
          error={errors?.nome?.type === "required" && "Preencha este campo"}
        />

        <Input
          label="Peso:"
          type="number"
          name="peso"
          control={{ ...register("peso", { required: true }) }}
          error={errors?.peso?.type === "required" && "Preencha este campo"}
        />

        <Input
          label="Idade:"
          type="number"
          name="idade"
          control={{ ...register("idade", { required: true }) }}
          error={errors?.idade?.type === "required" && "Preencha este campo"}
        />

        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        {loading ? (
          <Buttom disabled>Enviando...</Buttom>
        ) : (
          <Buttom onClick={() => handleSubmit(onSubmit)()}>Enviar</Buttom>
        )}

        <Error error={error} />
      </div>

      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
