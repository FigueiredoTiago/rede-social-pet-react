import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../Hooks/Api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  
  //================================================
  //funcao que recebe o token e retorna os dados.
  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);

    //json ja com informacoes do usuario.
    console.log(json);
  }

  //funcao para pegar o token
  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok)
        throw new Error(`Erro: ${tokenRes.statusText} usuario Invalido!`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }   

  //===================
  //funcao que valida se o token ainda e valido, e loga automaticamente.
  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token Invalido!");
          await getUser(token);
        } catch (err) {
          userLogOut();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }

    autoLogin();
  }, []);

  //funcao de logOut=============
  const navigate = useNavigate();

  async function userLogOut() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogOut, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
