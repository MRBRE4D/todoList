// 初始值
export const initState = {
  todos: [],
};

// 避免字串出錯，將動作包成物件
export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
};

const TodoReducer = (state, action) => {

  const { type, payload } = action;

  // console.log("type", type);
  // console.log("payload", payload);
//- reducer 都只把資料回傳 真正處理的位置放在Context裡以方便維護
  switch (type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: payload.todo,
      };

    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: payload.todo,
      };

    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: payload.todo,
      };

    default:
      return state;
  }
};

export default TodoReducer;
