import { createContext, useReducer } from "react";
import TodoReducer, { ACTIONS, initState } from "./TodoReducer";

export const TodoContext = createContext(initState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);

  const addTodo = (todoContent) => {
    const todo = todoObj(todoContent);
    const newTodo = state.todos.concat(todo);

    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  // 透過useContext將包成物件的value傳遞給子物件(children)，使用時解構
  const value = {
    todos: state.todos,
    addTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// 根據id 更改 & 刪除 todo
const todoObj = (todoContent) => {
  return {
    id: Math.floor(Math.random() * 100000),
    todoContent,
    complete: false,
  };
};
