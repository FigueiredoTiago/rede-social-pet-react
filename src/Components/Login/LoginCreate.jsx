import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { USER_POST } from '../Hooks/Api';
import useFetch from '../Hooks/useFetch';
import Error from '../Helper/Error';
import Head from "./../Helper/Head";

import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/reducers/user';

const LoginCreate = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const {loading, error, request} = useFetch();

  async function onSubmit(data) {
    const username = data.username;
    const password = data.password;
    const email = data.email;

    const {url, options} = USER_POST({
      username,
      password,
      email,
    });

    const {response} = await request(url, options);
    if(response.ok) dispatch(userLogin({username: username, password: password}));
    
    console.log(response);
  }


  return (
    <section className="animeLeft">
      <Head title='Cadastre-se ' />
      <h1 className="title">Cadastre-se</h1>

      <div>
        <Input
          type="text"
          label="Nome:"
          control={{ ...register("username", { required: true }) }}
          error={errors?.username?.type === "required" && "Preencha este campo"}
        />

        <Input
          type="email"
          label="Email:"
          control={{ ...register("email", { required: true }) }}
          error={errors?.username?.type === "required" && "Preencha este campo"}
        />

        <Input
          type="password"
          label="Senha:"
          control={{ ...register("password", { required: true }) }}
          error={errors?.username?.type === "required" && "Preencha este campo"}
        />

        {loading ? (
          <Button disabled >cadastrando...</Button>
        ) : (
          <Button onClick={() => handleSubmit(onSubmit)()}>cadastrar</Button>
        )}

        <Error error={error && error} />


      </div>
    </section>
  );
}

export default LoginCreate