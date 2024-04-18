import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import ProgressBar from "./ProgressBar";
import Sort from "./Sort";

const Wrapper = styled.div`
  padding: 28px 0;
  border-top: 2px solid #6e82c4;
  border-bottom: 2px solid #6e82c4;
`;
export default function Content() {

  return (
    <>
      <Wrapper>
        <ProgressBar />
        <TodoList />
      </Wrapper>
      <Sort />
    </>
  );
}
