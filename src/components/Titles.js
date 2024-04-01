import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0 20px 0;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #6b80c2;
`;

const Title2 = styled.h4`
  margin-top: 8px;
  color: #5B6CA5;
`;
export default function Titles() {
  return (
    <Wrapper>
      <Title>Todo List</Title>
      <Title2>Add things to do</Title2>
    </Wrapper>
  );
}
