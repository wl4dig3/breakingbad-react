
export const TodoItem = ({ todo, onDeletedTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className= {`align-self-center ${todo.done && 'text-decoration-line-through'} `}
        onClick={ () => onToggleTodo(todo.id) }
        >
        {todo.desription}
      </span>
      <button
      onClick={ () => onDeletedTodo(todo.id)}
      className="btn btn-danger">Borrar</button>
    </li>
  );
};
