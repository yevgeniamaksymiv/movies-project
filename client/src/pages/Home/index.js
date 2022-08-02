import { Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MovieCard } from '../../components';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: 'calc(100vh - 130px)',
  position: 'sticky',
  top: theme.spacing(2),
}));

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filters section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1,  padding: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <MovieCard />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                  <MovieCard />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                  <MovieCard />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                  <MovieCard />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                  <MovieCard />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies>Selected movies</SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;