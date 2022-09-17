import { useState, useMemo } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumbre = 100) => {
    for (let i = 0; i < iterationNumbre; i++) {
        console.log('ahi vamos jou ...');
    }
    return `${iterationNumbre} iteraciones realizadas satisfactoriamente`
}

export const MemoHook = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(true);
  // uso del useMemo
  const memorizedValue = useMemo( () => heavyStuff(counter), [counter]) // aquí se le pasa el argumentoque es el valor  de la iteración en la variable counter

  return (
    <>
      <h2>Counter: <small>{counter}</small> </h2>
      <hr />
      <h4>{memorizedValue}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button
       className="btn btn-success"
       onClick={ () => setShow(!show)}
       >
        Show/Hide { JSON.stringify(show)}
        </button>
    </>
  );
};
