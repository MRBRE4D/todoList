import React, { useState } from "react";
import styled from "styled-components";

import Titles from "./components/Titles";
import Add from "./components/Add";
import Content from "./components/Content";

// import {Container, MEDIA_QUERY_MD, MEDIA_QUERY_LG} from './Style';

const Container = styled.div`
  max-width: 600px;
  padding: 28px;
  margin: 0 auto;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  const [list, setList] = useState([]);
  const onAdd = (value) => {
    const newArray = [...list, value];
    setList(newArray);
  };

  return (
    <>
      <Container>
        <Titles />
        <Content list={list} />
        <Add onAdd={onAdd} />
      </Container>
    </>
  );
}
