import { DeleteOutline, Done } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import DialogCard from "./DialogCard";

const Card = ({ text, moveTodoToDone, deleteTodo }) => {
  const [open, setOpen] = React.useState(false);
  const handleDoneClick = () => {
    moveTodoToDone(text);
  };

  const handleDeleteClick = () => {
    setOpen(true);
  };

  const handleDeleteTodo = () => {
    deleteTodo(text);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
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
        sx={{ maxWidth: 300, color: "#9E78CF", paddingInlineStart: 3 }}
        overflow={"hidden"}
      >
        {text}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, paddingInlineEnd: 3 }}>
        <Tooltip title="Tamamla" placement="top">
          <IconButton onClick={handleDoneClick}>
            <Done sx={{ color: "#9E78CF" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Sil" placement="top">
          <IconButton onClick={handleDeleteClick}>
            <DeleteOutline sx={{ color: "#9E78CF" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <DialogCard
        open={open}
        handleClose={handleClose}
        handleDeleteTodo={handleDeleteTodo}
      />
    </Box>
  );
};

export default Card;
