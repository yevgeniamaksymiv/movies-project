import { Grid, Paper } from "@mui/material";

const Home = () => {
  return (
    <Grid container spacing={2} marginTop={2}>
      <Grid item xs={12}>
        <Paper>Filters section</Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper>List of movies</Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper>Selected movies</Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
