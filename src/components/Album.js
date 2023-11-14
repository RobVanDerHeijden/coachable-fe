import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import FlipCard from "./FlipCard";

const defaultTheme = createTheme();

export default function Album(props) {
  const [filterGenre, setFilterGenre] = useState("");

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Container sx={{ py: 8 }} maxWidth="md">
        <Button size="small" onClick={() => setFilterGenre("BRONZE")}>
          Bronze
        </Button>
        <Button size="small" onClick={() => setFilterGenre("SILVER")}>
          Silver
        </Button>
        <Button size="small" onClick={() => setFilterGenre("GOLD")}>
          Gold
        </Button>

        <Button size="small" onClick={() => setFilterGenre("")}>
          Clear Filter
        </Button>
        <hr />
        <Grid container spacing={4}>
          {/* {console.log(props)} */}
          {props.coaches
            .filter((coach) => coach.genre.includes(filterGenre))
            .map((coach) => (
              <FlipCard coach={coach} key={coach.id} />
            ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
