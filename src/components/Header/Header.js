import { Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  let variant1 = "h3";
  let variant2 = "h4";
  if (matches) {
    variant1 = "h4";
    variant2 = "h5";
  } else {
    variant1 = "h3";
    variant2 = "h4";
  }
  return (
    <Grid alignItems="center" container className={classes.headerHeight}>
      <Grid item xs={12}>
        <Typography letterSpacing={1} gutterBottom variant={variant1} align="center">
          Prima Ramadhani Putra{" "}
        </Typography>
        <Typography style={{ backgroundColor: 'white', color: 'black', maxWidth: '700px', margin: 'auto', borderRadius: '5px' }} variant={variant2} align="center">
          is JAVASCRIPT programmer
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Header;
