import { ErrorOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
      <Box sx={{ bgcolor: "#9E78CF", p: 2 }}>
        <DialogTitle sx={{ color: "#1D1825" }} id="alert-dialog-title">
          {"Bu görevi silmek istediğinizden emin misiniz?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <ErrorOutline />
            Görevi silerseniz geri alamazsınız.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
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
