import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

export default function Album(props) {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <Grid item key={props.coach.id} xs={12} sm={6} md={4}>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: "56.25%",
            }}
            image={props.coach.image}
          /> */}

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.coach.name}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Grid>
  );
}
