import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Addbar from "./components/Addbar";
import Card from "./components/Card";
import CardDone from "./components/CardDone";
import { useTranslation } from "react-i18next";
import ButtonLang from "./components/ButtonLang";

const App = () => {
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    if (text) {
      setTodoData([...todoData, text]); // update state and add the new object
      setText(""); // clear the input value
    }
  };

  const [text, setText] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [todoDataDone, setTodoDataDone] = useState([]);

  const moveTodoToDone = (index) => {
    const updatedTodoData = [...todoData]; // firstly copy the state
    const movedItem = updatedTodoData.splice(index, 1); // remove the index element from copy
    setTodoData(updatedTodoData); // set the updated state

    // Ardından, kaldırılan öğeyi todoDataDone'a ekle
    setTodoDataDone([...todoDataDone, movedItem[0]]);
  };

  const deleteTodo = (index) => {
    const updatedTodoData = [...todoData]; // firstly copy the state
    updatedTodoData.splice(index, 1); // remove the index element from copy
    setTodoData(updatedTodoData); // set the updated state
  };

  const moveDoneToTodo = (index) => {
    const updatedTodoDataDone = [...todoDataDone]; // state copy
    const movedItem = updatedTodoDataDone.splice(index, 1); // remove the index element from copy
    setTodoDataDone(updatedTodoDataDone); // set the updated state

    setTodoData([...todoData, movedItem[0]]);
  };

  const deleteTodoDone = (index) => {
    const updatedTodoDataDone = [...todoDataDone];
    updatedTodoDataDone.splice(index, 1);
    setTodoDataDone(updatedTodoDataDone);
  };

  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box
      sx={{
        bgcolor: "#0D0714",
        // paddingBlock: "100px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <ButtonLang />
      <Box
        sx={{
          bgcolor: "#0D0714",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "70%", sm: "60%", md: "50%", lg: "40%", xl: "30%" },
            minHeight: "75%",
            bgcolor: "#1D1825",
            borderRadius: 5,
            paddingBlock: 5,
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <Addbar text={text} setText={setText} onClick={handleClick} />
          {/* todo list */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              minHeight: 250,
            }}
          >
            <Typography
              variant="h6"
              sx={{ width: "80%", color: "white" }}
              fontSize={{ xs: 12, sm: 14, md: 16 }}
            >
              {t("taskTodo")} - {todoData.length}
            </Typography>
            {todoData.length > 0 ? (
              todoData.map((item, index) => (
                <Card
                  key={index}
                  text={item}
                  moveTodoToDone={() => moveTodoToDone(index)}
                  deleteTodo={() => deleteTodo(index)}
                />
              ))
            ) : (
              <Typography
                sx={{
                  marginBlockStart: "100px",
                  color: "#9E78CF",
                  textAlign: "center",
                }}
              >
                {t("noTasks")}
              </Typography>
            )}
          </Box>

          {/* complete list */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              minHeight: 250,
            }}
          >
            <Typography
              variant="h6"
              sx={{ width: "80%", color: "white" }}
              fontSize={{ xs: 12, sm: 14, md: 16 }}
            >
              {t("done")} - {todoDataDone.length}
            </Typography>
            {todoDataDone.length > 0 ? (
              todoDataDone.map((item, index) => (
                <CardDone
                  key={index}
                  text={item}
                  moveDoneToTodo={() => moveDoneToTodo(index)}
                  deleteTodoDone={() => deleteTodoDone(index)}
                />
              ))
            ) : (
              <Typography
                sx={{
                  marginBlockStart: "100px",
                  color: "#9E78CF",
                  textAlign: "center",
                }}
              >
                {t("noDoneTasks")}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
