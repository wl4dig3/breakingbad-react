
const initialState = [{
    id: '1',
    todo: 'Recolectar la piedra del alma',
    done: false,
}];
// un reducer es solamente una función pura que regresa un state.
// el state NO debe ser mutado.

const todoReducer = (state = initialState, action = {}) => {

    
    if (action.type === '[TODO] add todo') {
        return [...state, action.payload] // crea una copia del estado y agrega el payload 
    }
    return state
}

let todos = todoReducer();

// para hacer una modificación al reducer, hay que mandar una action, y esa action sirá como se moficará

// la siguiente nueva const hay que pasarsela al reducer para que haya un nuevo state
const newTodo = {
    id: '2',
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);

console.log({state: todos})