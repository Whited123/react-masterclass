import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: tomato;
  &:hover {
    color: teal;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  ${Title}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>안녕</Title>
    </Wrapper>
  );
}

export default App;
