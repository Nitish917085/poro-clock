import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const Clock = styled.div`
  font-size: xx-large;
  height: 60px;
  background-color: #ccc0fa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin: 30px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

function Task2() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [cycles, setCycles] = useState(2);
  const [currentCycle, setCurrentCycle] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes === 0) {
            // Check if it's time for a break or work
            if (isBreak) {
              setCurrentCycle(currentCycle + 1);
              setIsBreak(false);
            } else {
              setIsBreak(true);
            }

            // Check if the maximum number of cycles has been reached
            if (currentCycle + 1 >= cycles) {
              stopTimer();
              return;
            }

            setMinutes(isBreak ? 5 : 25);
            setSeconds(0);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, isBreak, currentCycle, cycles]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setCurrentCycle(0);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  const handleCycleChange = (event) => {
    const limit = parseInt(event.target.value, 10);
    setCycles(limit);
  };

  return (
    <div>
      <h1>Pomodoro Clock</h1>
      <div>
        <h2
          style={{
            backgroundColor: `${isBreak ? "lightgreen" : "tomato"}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius:"5px"
          }}
        >
          {isBreak ? "Break Time" : "Work Time"}
        </h2>
        <Clock>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </Clock>
      </div>
      <div>
        <label>Cycles Limit : {`${" "}`}</label>
        <input
          type="number"
          min="1"
          value={cycles}
          onChange={handleCycleChange}
        />
      </div>
      <div
        style={{ margin: "20px", display: "flex", justifyContent: "center" }}
      >
        {isRunning ? (
          <button onClick={stopTimer}>Stop</button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}
      </div>
    </div>
  );
}

export default Task2;
