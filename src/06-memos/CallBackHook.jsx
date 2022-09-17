import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback(
      () => {
        setCounter( (value) => value + 1)
      },
      [],
    )
    

    // const increment = () => {
    //     setCounter( counter + 1)
    //     console.log(counter);
    // }
  return (
    <>
        <h2>useCallBack Hook {counter}</h2>
        <hr />
        <ShowIncrement increment={increment} />
    </>
  )
}
