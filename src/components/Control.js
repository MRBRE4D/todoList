import React, { useState, useContext } from "react";
import { TodoContext } from "../hooks/TodoContext";

import styled from "styled-components";
import addIcon from "../assets/icon/add.png";

//#region  styled-components
const Wrapper = styled.div`
  border: 0.5px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 76px;
  max-width: 600px;
  /* min-width: 50px; */
  margin: 16px 0;
  color: #6b80c2;
`;
const WrapperInput = styled.div`
  display: flex;
  justify-content: flex-start;
  
`;

const Input = styled.input`
  padding: 0.8em;
  height: 1.5rem;
  margin-right: 4px;
  background-color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  letter-spacing: 0.05em;
  flex-grow: 1;
  flex-shrink: 1;
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
    transition: 0.5s ease-in-out;
  }
`;
//#endregion  styled-components

const Control = () => {
  // 解構 Context 傳過來的 "增加todo" 操作
  const { addTodo } = useContext(TodoContext);

  // todo 內容
  const [todoContent, setTodoContent] = useState("");

  const handleChange = (e) => {
    setTodoContent(e.target.value);
    console.log(e.target.value);
  };

  
  // 點擊"+"按鈕後呼叫addTodo，並disptch ADD_TODO action
  const handleClick = () => {
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
