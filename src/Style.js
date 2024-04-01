import styled from "styled-components";

export const MEDIA_QUERY_MD = "@media screen and {min-width: 768px}";
export const MEDIA_QUERY_LG = "@media screen and {min-width: 1000px}";

const Style = {
  PADDING: "padding: 20px;",
  FLEX_ROW_CENTER: "display: flex; justify-content: center;",
};

const space = {
  border: "1px dash gray"
}
export const Container = styled.div`
  ${Style.PADDING}
  /* display: flex; */
  border: 1px solid gray;
  background: rgb(233, 232, 255);
  background: linear-gradient(
    0deg,
    rgba(233, 232, 255, 1) 0%,
    rgba(230, 237, 255, 1) 52%,
    rgba(222, 236, 255, 1) 100%
  );
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  ${Style.FLEX_ROW_CENTER}
`;

// export const Input = styled.input`
//   width: 250px;
// `;

export const Title = styled.div`
  ${Style.FLEX_ROW_CENTER}
  ${Style.PADDING}
  font-size: 16px;
`;

export const AddButton = styled.button`
  width: 70px;
  height: 30px;
`;

export const TodoList = styled.ul`
  ${Style.PADDING}
`;

export const TodoItem = styled.li`
  padding: 5px;
  cursor: pointer;
`;
