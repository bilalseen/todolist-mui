import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Addbar from "./components/Addbar";
import Card from "./components/Card";
import CardDone from "./components/CardDone";

const App = () => {
  const handleClick = () => {
    if (text) {
      setTodoData([...todoData, text]); // update state and add the new object
      setText(""); // clear the input value
    }
  };

  const [text, setText] = useState("");
  const [todoData, setTodoData] = useState([
    "Lorem ipsum dolor sit amet",
    "Lorem lorem",
    "ipsum dolor",
    "amet sit dolor",
  ]);
  const [todoDataDone, setTodoDataDone] = useState([
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ]);

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

  return (
    <Box
      sx={{
        bgcolor: "#0D0714",
        width: "99vw",
        paddingBlock: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 583,
          minHeight: 658,
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
          <Typography variant="h6" sx={{ width: 430, color: "white" }}>
            Tasks to do - {todoData.length}
          </Typography>
          {todoData.map((item, index) => (
            <Card
              key={index}
              text={item}
              moveTodoToDone={() => moveTodoToDone(index)}
              deleteTodo={() => deleteTodo(index)}
            />
          ))}
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
          <Typography variant="h6" sx={{ width: 430, color: "white" }}>
            Done - {todoDataDone.length}
          </Typography>
          {todoDataDone.map((item, index) => (
            <CardDone
              key={index}
              text={item}
              moveDoneToTodo={() => moveDoneToTodo(index)}
              deleteTodoDone={() => deleteTodoDone(index)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default App;
