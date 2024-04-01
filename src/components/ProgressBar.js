import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
`;
const ProgressNum = styled.div`
margin-right: 8px;
  color: #6b80c2;
`;
const ProgressBox = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
`;
const ProgressFill = styled.div`
  height: 16px;
  width: 50px;
  border-radius: 10px;
  background-color: #9393ff;
`;

export default function ProgressBar() {
  const [num, setNum] = useState(0);

  return (
    <Wrapper>
      <ProgressNum>{num}%</ProgressNum>
      <ProgressBox>
        <ProgressFill></ProgressFill>
      </ProgressBox>
    </Wrapper>
  );
}
