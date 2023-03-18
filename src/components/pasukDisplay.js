import React from "react";
import { Box } from "@mui/material";

export const PasukDisplay = (props) => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        textAlign: "center",
      }}
    >
      <button onClick={props.onPassukClick}>Generate Random Passuk</button>
      <Box border={1} sx={{height:60}}>
        <p>{props.passukText}</p>
      </Box>
    </div>
  );
};
