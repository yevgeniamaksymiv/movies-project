import { 
  Grid, 
  Paper, 
  Box, 
  Pagination, 
  Stack
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

import { ErrorWindow, MovieCard, SelectedMoviesSection } from '../../components';
import { MOVIES_QUERY } from './queries';
import { useMovies } from '../../hooks/useMovies';
import { COUNT_OF_PAGES } from '../../const';

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });

  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const paginationHanler = (event, page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };
  
  if (error) {
    return (
      <ErrorWindow />
    );
  }
  
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2, paddingBottom: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              {loading && (
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 3}}>
                  <CircularProgress/>
                </Box>
              )}
              {data && (
                <Grid container spacing={2}>
                  {data.movies.results.map((movie) => (
                    <Grid
                      key={movie.id}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      xl={2}
                    >
                      <MovieCard movie={movie} onCardSelect={selectMovie} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
            <Box sx={{ display: 'table', margin: '0 auto', padding: '16px 0' }}>
              <Stack spacing={2}>
                {data && (
                  <Pagination
                    color="primary"
                    count={COUNT_OF_PAGES}
                    page={page}
                    onChange={paginationHanler}
                  />
                )}
              </Stack>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMoviesSection
            selectedMovies={selectedMovies}
            deleteMovie={deleteMovie}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
