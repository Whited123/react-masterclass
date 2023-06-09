import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
  grid-template-columns: repeat(3, 1fr);
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggle = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggle}>
      <Grid>
        <Box layoutId="BOOM"></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Grid>
      <AnimatePresence>
        {clicked ? (
          <Overlay
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId="BOOM" style={{ width: 400, height: 200 }}></Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
