import React from "react";
import styled from "styled-components";
import { TodoProvider } from "./hooks/TodoContext";
import Titles from "./components/Titles";
import Control from "./components/Control";
import Content from "./components/Content";

const Container = styled.div`
  max-width: 600px;
  padding: 28px;
  margin: 0 auto;
  display: flex;  
  flex-direction: column;
`;
export default function App() {
  //TODO! 利用memorize hook 避免元件因為context的更新造成不必要渲染

  return (
    <TodoProvider>
      <Container>
        <Titles />
        <Content />
        <Control />
      </Container>
    </TodoProvider>
  );
}
