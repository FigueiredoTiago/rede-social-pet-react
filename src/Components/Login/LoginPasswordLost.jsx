import React from "react";
import Input from ".././Forms/Input";
import Button from ".././Forms/Button";
import { useForm } from "react-hook-form";
import UseFetch from "./../Hooks/useFetch";
import { PASSWORD_LOST } from "../Hooks/Api";
import Error from ".././Helper/Error";

import Head from "./../Helper/Head";

const LoginPasswordLost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, error, request, data } = UseFetch();

  const onSubmit = async (dados) => {
    const login = dados.login;

    const { url, options } = PASSWORD_LOST({
      login: login,
      url: window.location.href.replace("perdeu", "resetar"),
    });
    const { json } = await request(url, options);
    console.log(json);
  };

  return (
    <section className="animeLeft">
      <Head title='Redefinir senha ' />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : 
        <div>
          <Input
            label="Digite seu Email/Usuario"
            key="text"
            control={{ ...register("login", { required: true }) }}
            error={errors?.login?.type === "required" && "Preencha este campo!"}
          />

          {loading ? 
            <Button disabled>Enviando...</Button>
           : 
            <Button onClick={() => handleSubmit(onSubmit)()}>Enviar</Button>
          }

          {error && <Error error={error} />}
        </div>
      }

    </section>
  );
};

export default LoginPasswordLost;
