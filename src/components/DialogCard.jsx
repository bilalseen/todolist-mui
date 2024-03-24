import { ErrorOutline, WarningAmber } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const DialogCard = ({ open, handleClose, handleDeleteTodo }) => {
  const { t } = useTranslation();
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
        <Tooltip
          title={t("dialogCard.toolTips.icons.warning")}
          placement="bottom"
        >
          <WarningAmber fontSize="large" />
        </Tooltip>
        <DialogTitle
          sx={{ color: "#1D1825", textAlign: "center" }}
          id="alert-dialog-title"
        >
          {t("dialogCard.title")}
        </DialogTitle>
        <DialogActions
          sx={{ display: "flex", justifyContent: "center", gap: 1 }}
        >
          <Button
            variant="outlined"
            sx={{ color: "#1D1825", borderColor: "#1D1825" }}
            onClick={handleClose}
          >
            {t("dialogCard.close")}
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#1D1825", borderColor: "#1D1825" }}
            onClick={handleDeleteTodo}
            autoFocus
          >
            {t("dialogCard.delete")}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DialogCard;
