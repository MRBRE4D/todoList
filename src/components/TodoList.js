import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodo } from "../hooks/TodoContext";

const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;
export default function TodoList() {
  const { todos, sort } = useTodo();

  //! bug: sort 改變原陣列 取消勾選後不會回到原有位置
  //! solution:　將 ID 改成根據日期
  //- logic : 先比較complete，一樣則比id(小的在前面)。true(完成)的在後面，false(沒完成)的在前面

  // console.log("length=",todos.length)
  // console.log(...todos);
  return (
    <Wrapper>
      {todos
        .sort((a, b) => {
          // 當sort 為true，將完成的任務置底，並以時間戳記排序
          // TODO 好像這邊可以精簡
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
        .map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todoContent={todo.todoContent}
              id={todo.id}
              complete={todo.complete}
            />
          );
        })}
    </Wrapper>
  );
}
