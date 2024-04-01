import React, { useState } from "react";
import styled from "styled-components";

import addIcon from "../assets/icon/add.png";

const Wrapper = styled.div`
  /* border: 0.5px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 76px;
  max-width: 600px;
  margin: 16px 0;
  color: #6B80C2;
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
  outline:none;
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
  background-color:#6B80C2;
  cursor: pointer;
  &:hover {
    background-color: #2e47b1;
  }
`;

export default function Add({ onAdd }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const addItem = (e) => {
    onAdd(value);
    setValue("");
  };

  return (
    <>
      <Wrapper>
        <div>Add to list</div>
        <WrapperInput>
          <Input value={value} onChange={onChange} />
          <AddBtn type="" onClick={addItem}>
            <img src={addIcon} alt="" />
          </AddBtn>
        </WrapperInput>
      </Wrapper>
    </>
  );
}
