import React, { useEffect, useState } from "react";
import { useTodo } from "../hooks/TodoContext";

import styled from "styled-components";
import addIcon from "../assets/icon/add.png";

//#region  styled-components
const Wrapper = styled.div`
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
  const { addTodo } = useTodo();
  // todo 內容
  const [todoContent, setTodoContent] = useState("");

  const handleChange = (e) => {
    setTodoContent(e.target.value);
  };

  // 點擊"+"按鈕後將todo內容傳入addTodo，並將輸入框清空
  const handleClick = (e) => {
    if (!todoContent) {
      alert("輸入框不可為空");
      return;
    }
    addTodo(todoContent);
    setTodoContent("");
  };

  // 放在handleClick裡，滾動會在增加前執行，少一個todo的高度
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  //TODO! 利用memorize hook 避免元件因為context的更新造成不必要渲染
  
  // 監聽文字的動作，每次增加就滾到最底
  useEffect(() => {
    scrollToBottom()
  }, [todoContent]);

  return (
    <>
      <Wrapper>
        <div>Add to list</div>
        <WrapperInput>
          <Input
            value={todoContent}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleClick();
            }}
            onChange={handleChange}
          />
          <AddBtn
            onClick={() => {
              handleClick();
            }}
          >
            <img src={addIcon} alt="增加事項" />
          </AddBtn>
        </WrapperInput>
      </Wrapper>
    </>
  );
};

export default Control;
