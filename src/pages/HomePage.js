import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

import CoachableLogo from "../assets/imgs/logo-controller.png";

function HomePage() {
  return (
    <div className="container">
      <h1>HOME</h1>

      <Box sx={{ flexGrow: 1 }}>
        <div>
          <p className="legend">Welcome to Coachable</p>
          <img
            src={CoachableLogo}
            width="100"
            className="d-inline-block align-top"
            alt="Coachable logo"
          />
        </div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>

          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Link to={`/coaches`}>
              <CardMedia
                component="div"
                sx={{
                  // 16:9
                  pt: "56.25%",
                }}
                image="https://static.thenounproject.com/png/2616531-200.png"
              />
              <Typography variant="h3" gutterBottom>
                Check out coaches
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>

          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default HomePage;
