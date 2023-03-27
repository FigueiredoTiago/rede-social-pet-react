import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import { useForm } from "react-hook-form";
import Error from "../Helper/Error";
import UseFetch from "./../Hooks/useFetch";
import { PASSWORD_RESET } from "../Hooks/Api";
import { useNavigate } from "react-router-dom";
import Head from "./../Helper/Head";


const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, error, request, data } = UseFetch();

  const onSubmit = async (dados) => {
    const password = dados.password;
    
    const {url, options} = PASSWORD_RESET({
        login,
        key,
        password,
    });
    const {response} = await request(url, options);

    if(response.ok) navigate('/login');
  };

  return (
    <section>
      <Head title='Nova senha ' />
      <h1 className="title">Criar Nova senha.</h1>
        <div>
          <Input
            label="Digite a Nova senha"
            key="password"
            control={{ ...register("password", { required: true }) }}
            error={
              errors?.password?.type === "required" && "Preencha este campo!"
            }
          />

          {loading ? 
            <Button disabled>Enviando...</Button>
           : 
            <Button onClick={() => handleSubmit(onSubmit)()}>Enviar</Button>
          }
          {error && <Error error={error} />}
        </div>
    </section>
  );
};

export default LoginPasswordReset;
