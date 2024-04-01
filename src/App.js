import React, { useState } from "react";
import styled from "styled-components";
import { TodoProvider } from "./hooks/TodoContext";
import Titles from "./components/Titles";
import Add from "./components/Control";
import Content from "./components/Content";

// import {Container, MEDIA_QUERY_MD, MEDIA_QUERY_LG} from './Style';

const Container = styled.div`
  max-width: 600px;
  padding: 28px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <TodoProvider>
      <Container>
        <Titles />
        <Content />
        <Add />
      </Container>
    </TodoProvider>
  );
}
