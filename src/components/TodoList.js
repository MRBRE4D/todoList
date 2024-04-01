import React, { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "../hooks/TodoContext";

const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;
export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <Wrapper>
      {todos.map((todo) => {
        return <TodoItem todo={todo.todoContent} />;
      })}
    </Wrapper>
  );
}
