import { Add } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";

const Addbar = ({ text, setText, onClick }) => {
  const [inputBorderColor, setInputBorderColor] = useState("#9E78CF");

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
        onFocus={() => setInputBorderColor("#9E78CF")}
        value={text}
        style={{
          border: `1px solid ${inputBorderColor}`,
          height: "30px",
          width: "380px",
          borderRadius: "5px",
          backgroundColor: "transparent",
          paddingInline: "10px",
          color: "#9E78CF",
          outline: 0,
          fontSize: "18px",
        }}
        onKeyDown={(item) => {
          if (item.key === "Enter") {
            onClick();
          }
        }}
        placeholder="Add a new task"
        onChange={(e) => setText(e.target.value)}
      />
      <Tooltip title="Ekle" placement="top">
        <IconButton
          // onClick={text ? null : setInputBorderColor("red")}
          onClick={onClick}
          aria-label="delete"
          sx={{
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
