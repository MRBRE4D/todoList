import styled from "styled-components";
import checkedIcon from "../assets/icon/check.png";
import deletedIcon from "../assets/icon/clear.png";

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
`;

// label客製化checkbox
const StyledCheckbox = styled.label`
  height: 24px;
  width: 24px;
  display: inline-block;
  background-color: #6b80c2;
  background-image: url(${checkedIcon});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 6px;
`;
//#endregion

const CloseBtn = styled.button`
  background-color:initial;
  border: none;
`;

//#endregion styled-components 

export default function TodoItem({todo}) {


  return (
    <Container>
      <Wrapper>
        <CheckboxWrapper>
          <HiddenCheckbox></HiddenCheckbox>
          <StyledCheckbox></StyledCheckbox>
        </CheckboxWrapper>
        <div>{todo}</div>
        </Wrapper>
        <CloseBtn>
          <img src={deletedIcon} width={12} alt="delete the task" />
        </CloseBtn>
     
    </Container>
  );
}
