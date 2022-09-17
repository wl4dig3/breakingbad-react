import { useRef } from "react";

// uno de los usos del useRef es mantener una referencia  a un
// elemento HTML
export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
      ref={inputRef}
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
      />

      <button onClick={onClick} className="btn btn-info mt-3">
        Set focus
      </button>
    </>
  );
};
