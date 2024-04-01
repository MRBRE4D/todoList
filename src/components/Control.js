import React, { useState, useContext } from "react";
import { TodoContext } from "../hooks/TodoContext";

import styled from "styled-components";
import addIcon from "../assets/icon/add.png";

//#region  styled-components
const Wrapper = styled.div`
  /* border: 0.5px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 76px;
  max-width: 600px;
  margin: 16px 0;
  color: #6b80c2;
`;
const WrapperInput = styled.div`
  display: flex;
  justify-content: flex-start;
  /* border: 0.5px solid orange; */
`;

const Input = styled.input`
  padding: 0.8em;
  margin-right: 4px;
  background-color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  letter-spacing: 0.05em;
  flex-grow: 4;
  font-size: 18px;
`;

const AddBtn = styled.button`
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 56px;
  background-color: #6b80c2;
  cursor: pointer;
  &:hover {
    background-color: #2e47b1;
  }
`;
//#endregion  styled-components

const Control = () => {
  //Context 傳過來的"增加todo"操作
  const { addTodo } = useContext(TodoContext);

  // todo 內容
  const [todoContent, setTodoContent] = useState("");

  const handleChange = (e) => {
    setTodoContent(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    addTodo(todoContent);

    // setTodoContent("");
  };

  return (
    <>
      <Wrapper>
        <div>Add to list</div>
        <WrapperInput>
          <Input
            value={todoContent}
            // onKeyDown={handleClick}
            onChange={handleChange}
          />
          <AddBtn onClick={() => handleClick()}>
            <img src={addIcon} alt="" />
          </AddBtn>
        </WrapperInput>
      </Wrapper>
    </>
  );
};

export default Control;
