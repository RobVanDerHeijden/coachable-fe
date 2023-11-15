import React, { useEffect, useState } from "react";
import Album from "../components/Album";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function CoachPage() {
  const [coaches, setCoaches] = useState([]);

  // useEffect(() => {
  //   CoachAPI.get().then(function (response) {
  //     setCoaches(response.data.coaches);
  //   });
  // }, []);

  useEffect(() => {
    const newCoaches = [
      { id: 1, name: "Pam", genre: "BRONZE" },
      { id: 2, name: "Bobby", genre: "SILVER" },
      { id: 3, name: "Mike", genre: "GOLD" },
      { id: 4, name: "Jim", genre: "BRONZE" },
    ];
    setCoaches(newCoaches);
  }, []);

  return (
    <div>
      <Container maxWidth="sm">
        <h1>COACHES</h1>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Select a coach <br />
        </Typography>

        <Album coaches={coaches}></Album>
      </Container>

      <hr />
    </div>
  );
}

export default CoachPage;
