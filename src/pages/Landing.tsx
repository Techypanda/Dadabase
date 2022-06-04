import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Chef from "../assets/mmchef.svg";
import JokeSection from "../components/landing/JokeSection";
export default function Landing() {
  return (
    <Container>
      <Box height="60vh" width="100%" display="flex" justifyContent="center" alignItems="center">
        <Box
          sx={{
            width: '100%',
            maxHeight: '100%',
          }}
          component="img"
          src={Chef}
          alt="Talking Chef"
        />
      </Box>
      <JokeSection />
    </Container>
  )
}