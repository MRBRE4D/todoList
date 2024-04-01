import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Wrapper = styled.div`
/* border:1px solid red; */
margin-top: 20px;
display: flex;
flex-direction: column;
`
export default function TodoList() {
  return (
    <Wrapper>
      <TodoItem/>
      <TodoItem/>
    </Wrapper>
  );
}
