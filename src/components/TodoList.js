import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useTodo } from "../hooks/TodoContext";
import TodoItem from "./TodoItem";
import selectAllIcon from "../assets/icon/selectAll.png";
import deleteSelectedIcon from "../assets/icon/trash.png";
import { ACTIONS } from "../hooks/TodoReducer";

//#region styled-components
const Wrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const AllTodoControlerWrapper = styled.div.withConfig({
  shouldForwardProp: (props) => !["todos"].includes(props.todos),
})`
  // 沒有任何任務的時候不顯示多重操作按鈕
  ${(props) => (props.todos ? "none" : "visibility:hidden;")}
  margin-bottom: 8px;
  padding: 0 12px 0 16px;
  display: flex;
  justify-content: space-between;
`;

// 全選按鈕
const SelectAllBtn = styled.button`
  background-color: initial;
  border: none;
  cursor: pointer;

  // 透過明暗改變處理hover效果，因應不同瀏覽器做了多個設置
  &:hover {
    -webkit-filter: brightness(80%);
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.2s ease-in-out;
  }
`;
// 刪除已完成的所有任務按鈕
const DeleteSelectedBtn = styled.button`
  background-color: initial;
  border: none;
  cursor: pointer;

  // 透過明暗改變處理hover效果，因應不同瀏覽器做了多個設置
  &:hover {
    -webkit-filter: brightness(80%);
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.2s ease-in-out;
  }
`;

//#endregion styled-components

export default function TodoList() {
  const { todos, sort, toggleAllTodo, deleteSelectedTodo, onDragEnd } =
    useTodo();

  const handleSelectAll = () => {
    toggleAllTodo();
  };
  const handleDeleteSelected = () => {
    deleteSelectedTodo();
  };
  //! bug: sort 改變原陣列 取消勾選後不會回到原有位置
  //! solution:　將 ID 改成根據日期
  //- logic : 先比較complete，一樣則比id(小的在前面)。true(完成)的在後面，false(沒完成)的在前面

  console.log("todos:",todos)
  const result = {
    draggableId: 1,
    type: "TYPE",
    reson: "DROP",
    source: {
      droppableId: 1,
      index: 0,
    },
    destination: {
      droppableId: 1,
      index: 1,
    },
  };
  /*

   const onDragEnd = (result) => {
    const { source, desitnation, draggableId } = result;
    // 如果沒有更改目的地就跳出
    if (!destination) {
      return;
    }

    let arr = Array.from(state.todos);
    const [remove] = arr.splice(source.index, 1);
    arr.splice(destination, 0, remove);

    dispatch({
      type: ACTIONS.SORT_TODO,
      payload: {
        todo: arr,
      },
    });
  };

  */

  // console.log("length=",todos.length)
  // console.log(...todos);

  return (
    <Wrapper>
      <AllTodoControlerWrapper todos={todos.length}>
        <SelectAllBtn onClick={handleSelectAll}>
          <img src={selectAllIcon} alt="Select All Todo" width={20} />
        </SelectAllBtn>
        <DeleteSelectedBtn onClick={handleDeleteSelected}>
          <img src={deleteSelectedIcon} alt="Delete Checked Todo" width={20} />
        </DeleteSelectedBtn>
      </AllTodoControlerWrapper>
      <DragDropContext
        // onBeforeCapture={(e) => console.log("onBeforeCapture: ", e)}
        // onBeforeDragStart={(e) => console.log("onBeforeDragStart: ", e)}
        // onDragStart={(e) => console.log("onDragStart: ", e)}
        // onDragUpdate={(e) => console.log("onDragUpdate: ", e)}
        onDragEnd={(e) => {
          console.log("onDragEnd: ", e);
          console.log("before:", todos);
          onDragEnd(e);
          console.log("after:", todos);
        }}
      >
        <Droppable droppableId="id">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos
                .sort((a, b) => {
                  // 當sort 為true，將完成的任務置底，並以時間戳記排序

                  if (sort) {
                    return a.complete === b.complete
                      ? a.id < b.id
                        ? -1
                        : 1
                      : a.complete
                      ? 1
                      : -1;
                  } else {
                    return a.id < b.id ? -1 : 1;
                  }
                })
                .map((todo, i) => {
                  return (
                    <Draggable
                      key={todo.id}
                      draggableId={`${todo.id}`}
                      index={i}
                    >
                      {(provided) => (
                        <TodoItem
                          p={provided}
                          key={todo.id}
                          todoContent={todo.todoContent}
                          id={todo.id}
                          complete={todo.complete}
                        />
                      )}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  );
}
