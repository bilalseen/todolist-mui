import { DeleteOutline, Done, MoreVert } from "@mui/icons-material";
import {
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import DialogCard from "./DialogCard";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Card = ({ text, moveTodoToDone, deleteTodo }) => {
  const { t } = useTranslation();

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAnchor = Boolean(anchorEl);

  const handleClickAnchor = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        height: 75,
        backgroundColor: "#15101C",
        borderRadius: 10,
        paddingInline: "20px",
        paddingBlock: 1,
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
        <Tooltip title={t("toolTips.buttons.complete")} placement="top">
          <IconButton onClick={handleDoneClick}>
            <Done sx={{ color: "#9E78CF" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title={t("toolTips.buttons.delete")} placement="top">
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
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={openAnchor}
          onClose={handleCloseAnchor}
          onClick={handleCloseAnchor}
          PaperProps={{
            elevation: 0,
            sx: {
              bgcolor: "#9E78CF",
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "#9E78CF",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleDoneClick}>
            <ListItemIcon>
              <Done sx={{ color: "#15101C" }} />
            </ListItemIcon>
            {t("toolTips.buttons.complete")}
          </MenuItem>
          <MenuItem onClick={handleDeleteClick}>
            <ListItemIcon>
              <DeleteOutline sx={{ color: "#15101C" }} />
            </ListItemIcon>
            {t("toolTips.buttons.delete")}
          </MenuItem>
        </Menu>
        <IconButton onClick={handleClickAnchor}>
          <MoreVert sx={{ color: "#9E78CF" }} />
        </IconButton>
      </Box>
      <DialogCard
        open={open}
        handleClose={handleClose}
        handleDeleteTodo={handleDeleteTodo}
      />
    </motion.div>
  );
};

export default Card;
