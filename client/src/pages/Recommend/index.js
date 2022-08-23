import { useSearchParams } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import { useQuery } from '@apollo/client';
import { MOVIES_BY_IDS_QUERY } from './queries';

import { MovieCard } from '../../components';

const Recommend = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: { 
      ids: searchParams.get('ids').split(',').map((id) => +id)
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  };

  if (error) {
    return <div>Error. Try again!</div>;
  };

  return (
    <>
      <Typography component="h1" variant="h3" pt={2} pb={2}>
        {data && searchParams.get('title')}
      </Typography>
      {data.moviesByIds && (
        <Grid container spacing={2}>
          {data.moviesByIds.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <MovieCard movie={movie} isPreviewMode />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};;

export default Recommend;
