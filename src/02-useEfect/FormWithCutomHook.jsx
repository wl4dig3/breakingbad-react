import { useEffect } from "react";
import { useForm } from "../hooks/UseForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password, reset } = formState;

  return (
    <>
      <h1>Formulario FormWithCutomHook</h1>
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
      <input
        type="password"
        className="mt-3 form-control"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button
        onClick={onResetForm}
        className="btn btn-info mt-3"
      >
        Borrar
      </button>
    </>
  );
};
