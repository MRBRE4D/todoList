import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTodo } from "../hooks/TodoContext";

//#region styled-component
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const ProgressNum = styled.div`
  /* max-width: 5%;
  min-width: 5%; */
  flex-basis: 5%;
  flex-grow: 0;
  margin-right: 0.5rem;
  color: #6b80c2;
`;
const ProgressBox = styled.div`
  /* max-width: 95%;
  min-width: 95%; */
  flex-grow: 1;
  border-radius: 10px;
  background-color: #fff;
`;
const ProgressFill = styled.div.withConfig({
  shouldForwardProp: (props) => !["percent"].includes(props.percent),
})`
  height: 16px;
  width: ${(props) => props.percent}%;
  border-radius: 10px;
  background-color: #9393ff;
  transition: all 0.5s ease-in;
`;
//#endregion styled-component

export default function ProgressBar() {
  const { todos } = useTodo();

  // 完成任務百分比
  const [percent, setPercent] = useState(0);

  // 已完成的todo另外複製成陣列
  // const done = todos.filter((todo) => {
  //   return todo.complete === 1;
  // });
  // console.log("length=", todos.length);
  // console.log("todos=", todos.length, ...todos);
  // console.log("done=", done.length, ...done);
  // console.log(done.length, todos.length, num);
  // useEffect(() => {
  //   if (todos.length > 0) {
  //     let num = (done.length / todos.length) * 100;
  //     const result = num ? Math.floor(num) : 0;
  //     setPercent(result);
  //   }
  // }, [todos, done]);
  console.log(percent);
  return (
    <Wrapper>
      <ProgressNum>{percent}%</ProgressNum>
      <ProgressBox>
        <ProgressFill percent={percent}></ProgressFill>
      </ProgressBox>
    </Wrapper>
  );
}
