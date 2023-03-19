import React from "react";
import { Modal, Box, Typography } from "@mui/material";

export const ShowAnswerModal = (props) => {
  return (
    <Modal
      open={props.showAnswer}
      onClose={props.onClose}
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ width: "30%", height: "30%", backgroundColor: "white" }}>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}}>
          {props.passukText}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Sefer: {props.passuk.sefer}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Parsha: {props.passuk.parsha}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Perek: {props.passuk.perek}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Passuk: {props.passuk.passukNumber}
        </Typography>
      </Box>
    </Modal>
  );
};
