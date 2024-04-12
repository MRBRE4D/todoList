import TodoReducer, { ACTIONS, initState } from "./TodoReducer";
import { createContext, useContext, useReducer, useState } from "react";

export const TodoContext = createContext(initState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);

  // 是否處在編輯狀態
  const [editMode, setEditMode] = useState(false);

  // reducer 都只把資料回傳 真正處理的位置放在Context裡以方便維護

  const addTodo = (todoContent) => {
    const todo = todoObj(todoContent);
    // 複製一份新陣列加進新的todo
    const newTodo = state.todos.concat(todo);

    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  //! error: react warning non-boolean attr  將complete的值由布林改為數字
// 利用map + if 更改指定todo的完成狀態
  const toggleTodo = (todoId) => {
    const newTodo = state.todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, complete: !todo.complete ? 1 : 0 };
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
  // 利用filter刪掉對應id的todo
  const deleteTodo = (todoId) => {
    const newTodo = state.todos.filter((todo) => todo.id !== todoId);
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  // 利用map + if 指定要編輯的todo 
  const updateTodo = (todoId, todoContent) => {
    const newTodo = state.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          todoContent, 
        };
      }
      return todo
    });

    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  // 是否將已完成任務置底的State
  const [sort, setSort] = useState(false);

  // 透過useContext將包成物件的value傳遞給子物件(children)，使用時解構
  const value = {
    todos: state.todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    sort,
    setSort,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// todo 模板
//! error: react warning non-boolean attr
//! solu: boolean值 改成數字表示  false 改成 0

const todoObj = (todoContent) => {
  return {
    id: Date.now(),
    todoContent,
    complete: 0,
    // id: Math.floor(Math.random() * 100000),
  };
};

// 將 useContext 及 TodoContext 的匯出自訂為Hook 在維護上比較方便
export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === "undefine") {
    console.log("禁止在fn component以外使用");
  }
  return context;
};
