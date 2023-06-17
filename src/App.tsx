import styled from "styled-components";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  timerState,
  roundsState,
  goalsState,
  totalGoalsState,
  totalRoundsState,
} from "./recoilState";

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e44337;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const TimerContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const TimeBox = styled(motion.div)`
  font-size: 48px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fffdff;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PlayBtn = styled(motion.button)`
  background-color: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
`;

const PlayIcon = (): JSX.Element => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
    ></path>
  </svg>
);

const PauseButton = styled(motion.button)`
  background-color: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
`;

const PauseIcon = (): JSX.Element => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
    ></path>
  </svg>
);

function App() {
  const [timer, setTimer] = useRecoilState(timerState);
  const [rounds, setRounds] = useRecoilState(roundsState);
  const [goals, setGoals] = useRecoilState(goalsState);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [totalRounds, setTotalRounds] = useRecoilState(totalRoundsState);
  const [totalGoals, setTotalGoals] = useRecoilState(totalGoalsState);

  const handleTimerToggle = () => {
    setIsPlaying((prev) => !prev);
  };

  const tick = () => {
    if (timer === 0) {
      setTimer(1500);
      setRounds((prev) => prev + 1);
      if (rounds === 3) {
        setRounds(0);
        setGoals((prev) => prev + 1);
      }
    } else {
      setTimer((prev) => prev - 1);
    }
  };

  React.useEffect(() => {
    if (isPlaying) {
      const id = window.setInterval(tick, 1000);
      setIntervalId(id);
    } else {
      if (intervalId) {
        window.clearInterval(intervalId);
        setIntervalId(null);
      }
    }
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <Container>
      <Title>Pomodoro</Title>
      <TimerContainer>
        <TimeBox
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.2, 1],
            background: ["white", "yellow", "white"],
          }}
          transition={{ duration: 1 }}
        >
          {formatTime(timer).split(":")[0]}
        </TimeBox>
        <TimeBox
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.2, 1],
            background: ["white", "yellow", "white"],
          }}
          transition={{ duration: 1 }}
        >
          {formatTime(timer).split(":")[1]}
        </TimeBox>
      </TimerContainer>
      <Controls>
        {isPlaying ? (
          <PauseButton
            whileTap={{ scale: 0.9 }}
            onClick={handleTimerToggle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PauseIcon />
          </PauseButton>
        ) : (
          <PlayBtn
            whileTap={{ scale: 0.9 }}
            onClick={handleTimerToggle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PlayIcon />
          </PlayBtn>
        )}
      </Controls>
      <p>
        라운드 : {rounds}/{totalRounds}
      </p>
      <p>
        골 !!! : {goals}/{totalGoals}
      </p>
    </Container>
  );
}

export default App;
