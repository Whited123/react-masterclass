import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="red" bgColor="teal" />
      <Circle text="스틸 얼라이브" bgColor="tomato" />
    </div>
  );
}

export default App;
