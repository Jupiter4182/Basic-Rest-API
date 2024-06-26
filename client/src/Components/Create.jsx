import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Navbar from "../Components/Navbar";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";


const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Create() {
  const BASE_URL = "https://66797cc818a459f6395011d7.mockapi.io/test";

  const [name, setName] = useState("");
  const [createdAt, setCreatedAt] = useState(getDate());
  const [avatar, setAvatar] = useState("");

  const postData = (e) => {
    const response = axios.post(`${BASE_URL}`, {
      name,
      createdAt,
    });
    
    if (response) {
      console.log(response);
    }
    e.preventDefault();
    console.log(name);
    console.log("Date:" + createdAt);
    
  
  };
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Typography variant="h6" component="div">
          Create Item
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}> {/* screen xs = 12" ขนาดsmall 6 เหลือครึ่งนึง */}
              <TextField
                id="name"
                label="name"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
         

            
          </Grid>

          <Grid item xs={12} mt={2}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={postData}
            >
              Create
            </Button>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
