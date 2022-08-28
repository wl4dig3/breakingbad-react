import { useEffect, useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "el wla State",
    email: "wladi@gmail.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log({ name, value });
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  useEffect(() => {
    // console.log("useEffect ejecutada");
  }, []); // el arreglo vacio es el 2do parametro, significa que sólo se disparará 1 sola vez

  // se recomienda usar un sólo useEffect por cada efecto secundario que queramos ejecutar
  useEffect(() => {
    // console.log("useEffect ejecutado despues de un cambio en el State");
  }, [formState]);

  useEffect(() => {
    // console.log("email ha cambiado");
  }, [email]);
  

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="mt-3 form-control"
        placeholder="wla@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {
        (username === 'el wla State2') && <Message /> 
      }
    </>
  );
};
