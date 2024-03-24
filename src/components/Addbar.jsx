import { Add } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Addbar = ({ text, setText, onClick }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <input
        value={text}
        style={{
          border: `1px solid #9E78CF`,
          height: "30px",
          width: "70%",
          borderRadius: "5px",
          backgroundColor: "transparent",
          paddingInline: "10px",
          color: "#9E78CF",
          outline: 0,
        }}
        onKeyDown={(item) => {
          if (item.key === "Enter") {
            onClick();
          }
        }}
        placeholder={t("inputPlaceholder")}
        onChange={(e) => setText(e.target.value)}
      />
      <Tooltip title={t("toolTips.buttons.add")} placement="top">
        <IconButton
          onClick={onClick}
          aria-label="delete"
          sx={{
            display: { xs: "none", md: "flex" },
            color: "white",
            bgcolor: "#9E78CF",
            borderRadius: 2,
            width: 35,
            height: 35,
          }}
        >
          <Add />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Addbar;
