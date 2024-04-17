import React from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useTodo } from "../hooks/TodoContext";

import TodoList from "./TodoList";
import ProgressBar from "./ProgressBar";
import Sort from "./Sort";

const Wrapper = styled.div`
  padding: 28px 0;
  border-top: 2px solid #6e82c4;
  border-bottom: 2px solid #6e82c4;
`;
export default function Content() {

const {onDragEnd} =useTodo()


  
  return (
    <>
      <Wrapper>
        <ProgressBar />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="items">
            {(provided, snapshot) => <TodoList provided={provided} snapshot={snapshot}/>}
          </Droppable>
        </DragDropContext>
      </Wrapper>
      <Sort />
    </>
  );
}
