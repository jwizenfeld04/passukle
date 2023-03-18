import React from "react";
import { Box } from "@mui/material";

export const PrevGuessList = (props) => {
  let sefer = [];
  let parsha = [];
  let perek = [];
  let passuk = [];
  props.prevGuess.forEach((guess) => {
    sefer.push(guess.sefer);
    parsha.push(guess.parsha);
    perek.push(guess.perek);
    passuk.push(guess.passuk);
  });

  const handleHints = (guess, type) => {
    if (Number(props.passuk[type]) > Number(guess)) {
      return "(higher)";
    } else if (Number(props.passuk[type]) < Number(guess)) {
      return "(lower)";
    } else {
      return;
    }
  };

  return (
    <div>
      <Box border={1} sx={{ height: 400 }}>
        <h3 style={{ textAlign: "center" }}>
          <u>Previous Guesses</u>
        </h3>
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            display: "flex",
          }}
        >
          <h4>Sefer</h4>
          <h4>Parsha</h4>
          <h4>Perek</h4>
          <h4>Passuk</h4>
        </div>
        {props.prevGuess.length !== 0
          ? props.prevGuess.map((guess) => (
              <div
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  display: "flex",
                }}
                key={Math.random()}
              >
                <p>{guess.sefer}</p>
                <p>{guess.parsha}</p>
                <p>
                  {guess.perek}
                  {handleHints(guess.perek, "perek")}
                </p>
                <p>
                  {guess.passukNumber}
                  {handleHints(guess.passukNumber, "passukNumber")}
                </p>
              </div>
            ))
          : null}
      </Box>
    </div>
  );
};
