import { Button, Container, Divider, Paper, Typography } from "@mui/material";

export default function ServerError() {
  return (
    <Container component={Paper}>
      <Typography variant="h3" color="error" gutterBottom>
        server error
      </Typography>
    </Container>
  );
}
