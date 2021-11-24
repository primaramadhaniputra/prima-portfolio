import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { useStyle } from "./style";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { data } from "../../data";

function Portfolio() {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  let iconSize = "10rem";
  if (matches) {
    iconSize = "6rem";
  } else {
    iconSize = "10rem";
  }

  return (
    <Container style={{ marginBottom: "10rem" }}>
      <Typography align="center" variant="h3" marginTop={10} marginBottom={4}>
        Portfolio
      </Typography>
      {data.map((item, index) => {
        const { text, title, icon, id } = item;
        return (
          <Box display="flex" justifyContent="center" marginBottom={15}>
            <Card elevation={6} style={{ maxWidth: "70%", width: "100%" }}>
              <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                  <CardContent align="center">{icon}</CardContent>
                </Grid>
                <Grid item md={8} xs={12}>
                  <CardContent style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography gutterBottom variant="h4">
                      {title}
                    </Typography>
                    <Typography marginBottom={4} variant="subtitle1" color="text.secondary">
                      {text}
                    </Typography>
                    <Typography variant="subtitle1">
                      <Button href={`/projects/${id}`} color="secondary" variant="outlined">
                        Read More
                      </Button>
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Box>
        );
      })}
    </Container>
  );
}

export default Portfolio;
