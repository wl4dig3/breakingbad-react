import { useEffect } from "react";


export const Message = () => {
useEffect(() => {
  console.log('Message Mounted')

  return () => {
    console.log('Message UnMounted');
  }
}, [])

  return (
    <>
      <h2 className="mt-3">Usuario ya registrado</h2>
    </>
  );
};
