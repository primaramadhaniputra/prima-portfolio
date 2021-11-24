import { Container, Typography } from "@mui/material";
import React from "react";

function ErrorPage() {
  return (
    <Container style={{ minHeight: "75vh" }}>
      <Typography variant="h3" align="center" marginTop={20}>
        404
      </Typography>
      <Typography variant="h4" align="center">
        Page Not Found
      </Typography>
    </Container>
  );
}

export default ErrorPage;
