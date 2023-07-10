import styles from "./styles/loginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";

import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../store/reducers/user";

function LoginForm() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state);

  const loading = token.loading || user.loading;
  const error = token.error || user.error;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const username = data.username;
    const password = data.password;
    dispatch(userLogin({ username: username, password: password }));
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <div className={styles.form}>
        <Input
          type="text"
          label="Nome:"
          control={{ ...register("username", { required: true }) }}
          error={errors?.username?.type === "required" && "Preencha este campo"}
        />
        <Input
          type="password"
          label="Senha:"
          control={{ ...register("password", { minLength: 3 }) }}
          error={
            errors?.password?.type === "minLength" && "No minimo 8 caracteres"
          }
        />
        {loading ? (
          <Button disabled>carregando...</Button>
        ) : (
          <Button onClick={() => handleSubmit(onSubmit)()}>Entrar</Button>
        )}
        <Error error={error && error} />
      </div>

      <Link to="/login/perdeu" className={styles.perdeu}>
        perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Crie sua conta Agora...</p>
        <Link to="/login/criar" className={stylesBtn.button}>
          cadastro
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
