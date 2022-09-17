import { useState } from "react";
import { Small } from "../components/Small";
import { useCounter } from "../hooks";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h2>
        Counter:
        <Small value={counter} />{" "}
      </h2>
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
