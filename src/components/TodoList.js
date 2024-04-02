import React, { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import  { useTodo } from "../hooks/TodoContext";

const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;
export default function TodoList() {
  const { todos } = useTodo();

  return (
    <Wrapper>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todoContent={todo.todoContent} id={todo.id} complete={todo.complete} />;
      })}
    </Wrapper>
  );
}
