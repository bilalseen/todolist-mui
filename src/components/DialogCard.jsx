import { ErrorOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import React from "react";

const DialogCard = ({ open, handleClose, handleDeleteTodo }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box
        sx={{
          bgcolor: "#9E78CF",
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Tooltip title="Görevi silerseniz geri alamazsınız." placement="bottom">
          <ErrorOutline fontSize="large" />
        </Tooltip>
        <DialogTitle
          sx={{ color: "#1D1825", textAlign: "center" }}
          id="alert-dialog-title"
        >
          {"Bu görevi silmek istediğinizden emin misiniz?"}
        </DialogTitle>
        <DialogActions
          sx={{ display: "flex", justifyContent: "center", gap: 1 }}
        >
          <Button
            variant="outlined"
            sx={{ color: "#1D1825", borderColor: "#1D1825" }}
            onClick={handleClose}
          >
            Kapat
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#1D1825", borderColor: "#1D1825" }}
            onClick={handleDeleteTodo}
            autoFocus
          >
            Sil
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DialogCard;
