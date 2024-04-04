import styled from "styled-components";
import checkedIcon from "../assets/icon/check.png";
import deletedIcon from "../assets/icon/clear.png";
import { useTodo } from "../hooks/TodoContext";
//#region styled-components
// todoItem 外容器
const Container = styled.label`
  position: relative;
  padding: 16px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  border-left: 6px solid #6b80c2;
  border-radius: 4px;
  background-color: #fff;
  &:hover {
    border-left: 6px solid #9393ff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.2s;
  }
`;

// todoItem 內容器(checkbox + todoTitle)
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

//-           客製化checkbox              -//
//#region
// 純CSS 動態更改label樣式
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

//- 解構完的 complete 傳入要加上{} props.complete不用
//! notice: unknown  prop is being sent through the DOM 
//! solu: shouldForwardProp 控制屬性傳遞 
const ContentSpan = styled.span
.withConfig({
  shouldForwardProp: (props) => !["complete"].includes(props.complete),
})
`
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
`;

// 刪除按鈕
const DeleteBtn = styled.button`
  background-color: initial;
  border: none;
  cursor: pointer;
  &:hover {
    -webkit-filter: brightness(80%);
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.2s ease-in-out;
  }
`;

//#endregion styled-components

export default function TodoItem({ todoContent, id, complete }) {
  // 由 Context 傳入的操作函式
  const { toggleTodo, deleteTodo } = useTodo();

  const handleChange = () => {
    toggleTodo(id);
  };

  const handleClick = () => {
    deleteTodo(id);
  };
  return (
    <Container>
      <Wrapper>
        <CheckboxWrapper>
          <HiddenCheckbox
            checked={complete}
            id={id}
            onChange={handleChange}
          ></HiddenCheckbox>
          <StyledCheckbox htmlFor={id}></StyledCheckbox>
        </CheckboxWrapper>
        <ContentSpan
          complete={complete}
        >
          {todoContent}
        </ContentSpan>
      </Wrapper>
      <DeleteBtn onClick={handleClick}>
        <img src={deletedIcon} width={12} alt="delete the task" />
      </DeleteBtn>
    </Container>
  );
}
