import { Box, Button, Paper, Typography } from "@mui/material";
import { useMemo } from "react";

class Joker {
  speech: SpeechSynthesisUtterance;
  constructor() {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    this.speech = speech;
  }
  speakJoke(joke: string) {
    this.speech.text = joke;
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(this.speech);
  }
}

export default function JokeSection() {
  const joker = useMemo(() => {
    return new Joker()
  }, []);
  function tellJoke() {
    joker.speakJoke("Unfortunately these jokes only work if you git them.");
  }
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5" align="center">"Unfortunately these jokes only work if you git them."</Typography>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" onClick={() => tellJoke()} sx={{ mt: 1 }}>Tell Me Another Joke</Button>
      </Box>
    </Paper>
  )
}