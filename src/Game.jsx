import React, { useEffect, useState } from "react";
import { Button, styled } from "@mui/material";
import { shuffle, getCode } from "./gameUtil";
import defaultList from "./items.json";
import GameItem from "./GameItem";

export default function Game(props) {
  const { gameCode } = props;

  const [list, setList] = useState([]);
  const [code, setCode] = useState("");
  const [numChecked, setNumChecked] = useState(0);

  function handleCheckboxChange(isChecked) {
    console.log(isChecked);
    if (isChecked) {
      setNumChecked(numChecked + 1);
    } else {
      setNumChecked(numChecked - 1);
    }
    console.log(numChecked);
  }

  useEffect(() => {
    let gameArray = [];
    let largeArray = [];
    if (gameCode) {
      console.log(`GameCode: ${gameCode}`);
      gameCode.split("").forEach((code) => {
        const item = defaultList.find((item) => item.code === code);
        if (item) {
          item.items.forEach((item) => {
            gameArray.push(item);
          })
        }
      });
      setCode(gameCode);
    } else {
      largeArray = shuffle(defaultList);
      setCode(getCode(largeArray));
      largeArray.forEach((item) => {
        item.items.forEach((item) => {
          gameArray.push(item);
        });
      });
    }
    setList(gameArray);
  }, []);

  return (
    <Main>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>Scavenger Hunt</h1>
        {list && list.map((item, index) => {
            if(numChecked >= index) {
                return (
                    <GameItem
                        key={item.id}
                        item={item}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                )
            }}
        )}
      <Footer>
        Game Code: {code}
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigator.clipboard.writeText(code)}
          style={{ marginLeft: "10px" }}
        >
          Copy Code
        </Button>
      </Footer>
    </Main>
  );
}

const Main = styled("div")(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  backgroundColor: "var(--porange)",
  color: "var(--green)",
  paddingBottom: "100px",
  minHeight: "90vh",
}));

const Footer = styled("div")(({ theme }) => ({
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    padding: theme.spacing(2),
    backgroundColor: "var(--darkgreen)",
    color: "white",
}));
