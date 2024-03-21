import { Delete, DeleteOutline, Done, Undo } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";

const Card = ({ text, moveDoneToTodo, deleteTodoDone }) => {
  const handleUndoClick = () => {
    moveDoneToTodo(text);
  };

  const handleDeleteClick = () => {
    deleteTodoDone(text);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: 432,
        height: 75,
        bgcolor: "#15101C",
        borderRadius: 2,
      }}
    >
      <Typography
        sx={{
          maxWidth: 300,
          color: "#78CFB0",
          mx: 3,
          textDecorationLine: "line-through",
        }}
        overflow={"hidden"}
      >
        {text}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, paddingInlineEnd: 3 }}>
        <Tooltip title="Geri al" placement="top">
          <IconButton onClick={handleUndoClick}>
            <Undo sx={{ color: "#9E78CF" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Sil" placement="top">
          <IconButton onClick={handleDeleteClick}>
            <DeleteOutline sx={{ color: "#9E78CF" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Card;
