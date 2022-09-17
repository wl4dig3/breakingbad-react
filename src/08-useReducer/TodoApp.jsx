import { useEffect, useReducer } from "react";
import { TodoAdd, TodoList } from "../components";
import { todoReducer } from "./todoReducer";


const initialState = [
  // {
  //   id: new Date().getTime(),
  //   desription: "Recolectar la piedra del alma",
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() * 2.5,
  //   desription: "Recolectar la piedra del poder",
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || [];
}

// si hubiera más de un dispatch, entonces podría llamarte asi: dispatchTodo
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
    
  
  const handledNewTodo = (todoo) => {
    // console.log({todo});
    const action = {
      type: '[TODO] Add Todo',
      payload: todoo,
    }
    dispatch( action )
  };

  const handledDeleteTodo = (id) => {
    // console.log(id)
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    console.log('toggle->',id)
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id,
    });
  }

  return (
    <>
      <h1>
        TodoApp: 10 <small>pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
           todos={todos}
           onDeletedTodo={handledDeleteTodo}
           onToggleTodo={handleToggleTodo}
           />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd onNewTodo(todo) */}
          {/* id: new DAte() ..., description: '', done: false  */}
          
          <TodoAdd onNewTodo={handledNewTodo} />
          
        </div>
      </div>
    </>
  );
};
