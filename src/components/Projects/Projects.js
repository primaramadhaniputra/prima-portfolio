import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import cocktail from "../../image/cocktail.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useParams } from "react-router-dom";
import { data } from "../../data";

function Projects() {
  const matches = useMediaQuery("(max-width:600px)");
  const { id } = useParams();
  const newData = data.filter((item) => item.id === parseInt(id));

  let variantSize = "h3";
  if (matches) {
    variantSize = "h4";
  } else {
    variantSize = "h3";
  }

  if (newData.length < 1) {
    return (
      <Typography color="error" style={{ minHeight: "78vh" }} align="center" marginTop={20} variant="h4">
        UH OH WRONG ID
      </Typography>
    );
  }

  const { title, desc, img, use, url } = newData[0];

  return (
    <div style={{ minHeight: "93vh" }}>
      <Grid alignItems="center" container style={{ minHeight: "50vh", overflowY: "scroll" }}>
        <Grid item lg={4} md={12} xs={12}>
          <Typography gutterBottom align="center" variant={variantSize}>
            {title}
          </Typography>
        </Grid>
        <Grid item lg={8} md={12} xs={12}>
          <Card>
            <CardMedia height="100%" component="img" alt="green iguana" image={img} />
          </Card>
        </Grid>
      </Grid>
      <Container style={{ marginBottom: "100px" }}>
        <Box>
          <Typography marginTop={10} variant="h6">
            Project detail
          </Typography>
          <CardContent style={{ maxWidth: "400px" }}>
            <Typography variant="body1">{desc}</Typography>
          </CardContent>
        </Box>
        <Box>
          <Typography marginTop={10} variant="h6">
            using
          </Typography>
          <CardContent>
            {use.map((item, id) => (
              <Typography gutterBottom key={id} variant="body2">
                - {item}
              </Typography>
            ))}
          </CardContent>
        </Box>
        <Box style={{ display: "flex", justifyContent: "end", marginTop: "100px" }}>
          <Button href={url} color="error">
            visite website
          </Button>
          <Button href="/" startIcon={<ArrowBackIosNewIcon />} variant="outlined">
            Back to Home
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Projects;
