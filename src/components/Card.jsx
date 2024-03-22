import { DeleteOutline, Done, MoreVert } from "@mui/icons-material";
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
        width: "80%",
        height: 75,
        bgcolor: "#15101C",
        borderRadius: 2,
        px: { xs: 1, lg: 3 },
        py: 1,
      }}
    >
      <Tooltip title={text} placement="bottom">
        <Typography
          sx={{
            maxWidth: "70%",
            color: "#9E78CF",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          fontSize={{ xs: 10, sm: 12, md: 14, lg: 16 }}
        >
          {text}
        </Typography>
      </Tooltip>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          gap: 1,
        }}
      >
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
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          gap: 1,
        }}
      >
        <Tooltip title="More" placement="top">
          <IconButton onClick={() => null}>
            <MoreVert sx={{ color: "#9E78CF" }} />
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
