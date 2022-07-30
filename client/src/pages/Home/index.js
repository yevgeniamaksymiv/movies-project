import { Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: "calc(100vh - 130px)",
  position: "sticky",
  top: theme.spacing(2)
}));

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filters section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>List of movies</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies>Selected movies</SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
