import { useForm } from "../hooks"


export const TodoAdd = ({onNewTodo}) => {
    const {desription, onInputChange, onResetForm} = useForm({
        description: '',
    });
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (desription.length <= 1) return
        const newTodo = {
            id: new Date().getTime(),
            desription,
            done: false,
        }
        onNewTodo(newTodo)
        // onResetForm()
    }
  return (
    
        <form onSubmit={onFormSubmit}>
            <input
              type="text"
              placeholder="¿Qué hay que hacer?"
              className="form-control"
              name="desription"
              value={desription}
              onChange={onInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-3">
              Agregar
            </button>
        </form>
    
  )
}
