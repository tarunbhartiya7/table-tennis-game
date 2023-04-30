import { Button, Stack, Typography, Container } from "@mui/material";
import { useEffect, useState } from "react";

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const levelOneItems = [
  "forehand push",
  "backhand push",
  "forehand topspin",
  "backhand topspin",
  "turn forehand topspin",
];

const levelTwoItems = [
  "forehand push",
  "backhand push",
  "forehand topspin",
  "backhand topspin",
  "forehand flick",
  "backhand flick",
];

const levelThreeItems = [
  "forehand push",
  "backhand push",
  "forehand topspin",
  "backhand topspin",
  "forehand flick",
  "backhand flick",
  "turn forehand topspin",
];

let id;
const Random = ({ onQuit, level }) => {
  const [value, setValue] = useState("Ready!!!");

  useEffect(() => {
    id = setInterval(() => {
      if (level === "push+topspin") {
        setValue(levelOneItems[generateRandom(0, 5)]);
      } else if (level === "push+flick+topspin") {
        setValue(levelTwoItems[generateRandom(0, 6)]);
      } else if (level === "all") {
        setValue(levelThreeItems[generateRandom(0, 7)]);
      }
    }, 2000);

    return () => {
      clearInterval(id);
    };
  });
  return (
    <>
      <Button variant="contained" onClick={onQuit}>
        Quit
      </Button>
      <Stack sx={{ height: "100vh" }} justifyContent="center">
        <Typography sx={{ mb: 4 }} variant="h2" textAlign="center">
          {value.toUpperCase()}
        </Typography>
      </Stack>
    </>
  );
};

export default function App() {
  const [levelSelected, setLevelSelected] = useState(null);

  const handleClick = (level) => {
    setLevelSelected(level);
  };

  const handleQuit = () => {
    setLevelSelected(null);
  };

  return (
    <Container maxWidth="md">
      {levelSelected ? (
        <Random onQuit={handleQuit} level={levelSelected} />
      ) : (
        <>
          <Typography sx={{ mb: 4 }} variant="h2" textAlign="center">
            Table Tennis Practice
          </Typography>
          <Stack spacing={3} alignItems="center">
            <Button
              variant="contained"
              onClick={() => handleClick("push+topspin")}
            >
              push + topspin
            </Button>
            <Button
              variant="contained"
              onClick={() => handleClick("push+flick+topspin")}
            >
              push + flick + topspin
            </Button>
            <Button variant="contained" onClick={() => handleClick("all")}>
              All Drills
            </Button>
          </Stack>
        </>
      )}
    </Container>
  );
}
