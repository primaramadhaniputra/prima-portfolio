import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyle } from "./style";

function About() {
  const classes = useStyle();
  return (
    <Container className={classes.containerMargin}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography marginBottom={5} variant="h4">
            Hi, I'm Dani
          </Typography>
          <Typography marginBottom={2} variant="h6">
            I became a javascript programmer because i like to make websites and it makes me happy once i finish it
          </Typography>
          <Typography marginBottom={2} className={classes.text} variant="h6">
            I have been studying since 2019, the pandemic made me decide to learn a programming language, and I chose javascript as my first programming language
          </Typography>
          <Typography marginBottom={2} className={classes.text} variant="h6">
            I want to be a MERN stack, I've learned : HTML CSS, Javascript, Boostrap, Node.JS, Express.JS, React.JS, Material UI, React Hooks and I'm currently studying Mongo DB, and I'm also using github as vcs
          </Typography>
          <Typography marginBottom={2} className={classes.text} variant="h6">
            I live in Indonesia, West Sumatra, Padang Ulak Karang Utara. I was born in 1998 december 09
          </Typography>
          <Typography marginBottom={2} className={classes.text} variant="h6">
            Thanks for stopping by.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
