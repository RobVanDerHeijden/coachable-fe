import Button from "@mui/material/Button";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Coach = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();

  return (
    <div>
      <h1>Edit Coach</h1>
      <Button>
        <Link to="/coaches">Overview coaches</Link>
      </Button>
    </div>
  );
};

export default Coach;
