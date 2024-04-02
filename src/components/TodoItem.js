import styled from "styled-components";
import checkedIcon from "../assets/icon/check.png";
import deletedIcon from "../assets/icon/clear.png";
import { useState, useContext } from "react";
import { TodoContext } from "../hooks/TodoContext";

//#region styled-components
// todoItem 外容器
const Container = styled.div`
  position: relative;
  padding: 16px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  border-left: 6px solid #6b80c2;
  border-radius: 4px;
  background-color: #fff;
`;

// todoItem 內容器(checkbox + todoTitle)
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
`;

//-           客製化checkbox              -//
//#region
// checkbox容器
const CheckboxWrapper = styled.div`
  display: flex;
  margin-right: 20px;
`;

// label客製化checkbox
const StyledCheckbox = styled.label`
  height: 24px;
  width: 24px;
  display: inline-block;
  background-color: #fff;
  border: 0.8px solid gray;
  border-radius: 6px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

// 隱藏預設checkbox
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;
  &:checked + ${StyledCheckbox} {
    background-color: #6b80c2;
    background-image: url(${checkedIcon});
    border: none;
    border-radius: 6px;
  }
`;
//#endregion

const ContentSpan = styled.div`
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
`;

const CloseBtn = styled.button`
  background-color: initial;
  border: none;
`;

//#endregion styled-components

export default function TodoItem(props) {
  // 由 Context 傳入的 toggleTodo 函式
  const { toggleTodo } = useContext(TodoContext);

  // // 由父層傳入的 todo.complete 為勾選的預設值
  // const [checked, setChecked] = useState(complete);

  const handleChange = () => {
    toggleTodo(props.id);
    // setChecked((prev) => !prev);
    // console.log("complete 屬性的值現在是：", !complete);
  };
  // console.log("checked=", checked);
  // console.log("id=", props.id, "complete 屬性的值為：", complete);
  // console.log( id,complete);

  return (
    <Container>
      <Wrapper>
        <CheckboxWrapper>
          <HiddenCheckbox
            type="checkbox"
            check={props.complete}
            id={props.id}
            onChange={handleChange}
          ></HiddenCheckbox>
          {/*   傳入的ID綁定按鈕  */}
          <StyledCheckbox htmlFor={props.id}></StyledCheckbox>
        </CheckboxWrapper>
        <ContentSpan
          complete={props.complete}
          // style={{textDecoration:  complete ? "line-through": null}}
        >
          {props.todoContent}
        </ContentSpan>
        {/* <div>id={id}</div> */}
      </Wrapper>
      <CloseBtn>
        <img src={deletedIcon} width={12} alt="delete the task" />
      </CloseBtn>
    </Container>
  );
}
