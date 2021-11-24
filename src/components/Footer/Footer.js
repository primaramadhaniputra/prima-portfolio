import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Grid container paddingBottom={5}>
      <Grid item sm={8} xs={12} style={{ display: "flex", justifyContent: "center" }}>
        <Typography align="center" variant="subtitle2">
          primaramadhanip@gmail.com
        </Typography>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Typography align="center" variant="subtitle2">
          Programmer javascript,Web developer,MERN
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
