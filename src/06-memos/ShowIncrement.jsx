

export const ShowIncrement = ({increment}) => {
    console.log('volvi a incrementar')
  return (
    <>
    <button
     className="btn btn-info"
     onClick={ () => increment()}
     >
        Incrementar
    </button>
    </>
  )
}
