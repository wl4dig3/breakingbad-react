import { LoadingQuote, Quote } from "../components";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  console.log("--->", data, isLoading, hasError);

  // if (isLoading) {
  //     return (
  //         <h1>Cargando ....</h1>
  //     )
  // }   --> una manera de mostrar algo
  return (
    <>
      <h1>LayOut</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote quote={quote} author={author} />
      )}
      <button
        disabled={isLoading}
        onClick={increment}
        className="btn btn-primary"
      >
        Next quote
      </button>
    </>
  );
};
