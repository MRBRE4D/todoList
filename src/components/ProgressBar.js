import React, { useState } from "react";
import styled from "styled-components";

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
