import TodoReducer, { ACTIONS, initState } from "./todoReducer";
import { createContext, useReducer } from "react";

export const TodoContext = createContext(initState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);

  const addTodo = (todoContent) => {
    // 將輸入框value傳入模板並複製給 state.todos
    const todo = todoObj(todoContent);
    const newTodo = state.todos.concat(todo);

    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  const toggleTodo = (todoId) => {
    const newTodo = state.todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

    dispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  const deleteTodo = (todoId) => {
    const newTodo = state.todos.filter((todo) => todo.id !== todoId);
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: {
        todo: newTodo,
      }
    })
  }

  // 透過useContext將包成物件的value傳遞給子物件(children)，使用時解構
  const value = {
    todos: state.todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// todo 模板
const todoObj = (todoContent) => {
  return {
    id: Math.floor(Math.random() * 100000),
    todoContent,
    complete: false,
  };
};
