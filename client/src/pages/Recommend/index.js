import { useSearchParams } from 'react-router-dom';
import { Typography, Grid, Box } from '@mui/material';
import { useQuery } from '@apollo/client';
import { MOVIES_BY_IDS_QUERY } from './queries';

import { MovieCard } from '../../components';

const Recommend = () => {
  const [searchParams] = useSearchParams();

  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: {
      ids: searchParams
        .get('ids')
        .split(',')
        .map((id) => +id),
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error. Try again!</div>;
  }

  return (
      <Box pb={3}>
        <Typography component="h1" variant="h3" py={3}>
          {data && searchParams.get('title')}
        </Typography>
        {data.moviesByIds && (
          <Grid container spacing={2}>
            {data.moviesByIds.map((movie) => (
              <Grid key={movie.id} item xs={12} sm={4} md={3} lg={2}>
                <MovieCard movie={movie} isPreviewMode />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
  );
};

export default Recommend;
