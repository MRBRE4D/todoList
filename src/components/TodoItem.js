import styled from "styled-components";
import checkedIcon from "../assets/icon/check.png";
import deletedIcon from "../assets/icon/clear.png";
import editIcon from "../assets/icon/edit.png";
import { useTodo } from "../hooks/TodoContext";
import { useState } from "react";
//#region styled-components
// todoItem 外容器
const Container = styled.label`
  width: 100%;
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

// todoItem 內容器(checkbox + todoContent)
const Wrapper = styled.div`
  max-width: 80%;
  width: 80%;
  display: flex;
  align-items: center;
`;

//-           客製化checkbox              -//
//#region custom-checkbox
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
//#endregion custom-checkbox

//- 解構完的 complete 傳入要加上{} props.complete不用
//! notice: unknown  prop is being sent through the DOM
//! solution: shouldForwardProp 控制屬性傳遞
const ContentSpan = styled.span.withConfig({
  shouldForwardProp: (props) => !["complete"].includes(props.complete),
})`
  max-width: 50%;
  width: 50%;
  flex-grow: 1;
  flex-basis: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
`;

const BtnSpan = styled.span`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: space-between;
`;

// 刪除按鈕
const DeleteBtn = styled.button`
  background-color: initial;
  border: none;
  cursor: pointer;

  // 透過明暗改變處理hover效果，因應不同瀏覽器做了多個設置
  &:hover {
    -webkit-filter: brightness(80%);
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.2s ease-in-out;
  }
`;

// 編輯按鈕
const EditBtn = styled.button`
  margin-right: 5px;
  background-color: initial;
  border: none;
  cursor: pointer;

  // 透過明暗改變處理hover效果，因應不同瀏覽器做了多個設置
  &:hover {
    -webkit-filter: brightness(80%);
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.2s ease-in-out;
  }
`;

// 編輯輸入框
const TempTextContentInput = styled.input`
  max-width: 50%;
  width: 50%;
  font-size: 1rem;
  color: #6b80c2;
  margin: 0;
  background-color: #e9e8ff;
  border: none;
  border-radius: 5px;
  outline: none;
  letter-spacing: 0.05em;
`;

//#endregion styled-components
export default function TodoItem({ todoContent, id, complete, p }) {
  // 由 Context 傳入的操作函式
  const { toggleTodo, deleteTodo, updateTodo } = useTodo();

  // 開關編輯模式
  const [isShowTempInput, setIsShowTempInput] = useState(false);

  // 編輯狀態時的暫時文字，預設值為todos.map傳進來的文字
  const [tempContent, setTempContent] = useState(todoContent);

  // 即時儲存暫時輸入框的內容
  const handleTempContentChange = (e) => {
    setTempContent(e.target.value);
  };

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleUpdate = () => {
    if (!tempContent) {
      alert("更新內容不可為空");
      setTempContent(todoContent);
      return;
    }
    updateTodo(id, tempContent);
    setIsShowTempInput(!isShowTempInput);
  };

  const handleEdit = () => {
    setIsShowTempInput(!isShowTempInput);
    setTempContent(todoContent);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <Container
      onDoubleClick={handleEdit}
      ref={p.innerRef}
      {...p.draggableProps}
      {...p.dragHandleProps}
    >
      <Wrapper>
        <CheckboxWrapper>
          <HiddenCheckbox
            checked={complete}
            id={id}
            onChange={handleToggle}
          ></HiddenCheckbox>
          <StyledCheckbox htmlFor={id}></StyledCheckbox>
        </CheckboxWrapper>
        {/* 如以 styled-components傳入參數動態更改，會有前後位置不一的問題 */}
        {!isShowTempInput ? (
          <ContentSpan complete={complete}>{todoContent}</ContentSpan>
        ) : (
          <TempTextContentInput
            type="text"
            value={tempContent}
            autoFocus
            onBlur={handleEdit}
            onChange={handleTempContentChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUpdate();
            }}
          />
        )}
      </Wrapper>
      <BtnSpan>
        <EditBtn onClick={handleEdit}>
          <img src={editIcon} width={12} alt="edit the task" />
        </EditBtn>
        <DeleteBtn onClick={handleDelete}>
          <img src={deletedIcon} width={12} alt="delete the task" />
        </DeleteBtn>
      </BtnSpan>
    </Container>
  );
}
