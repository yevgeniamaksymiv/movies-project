import { styled } from '@mui/material/styles';
import { Paper, Box, Typography, TextField } from '@mui/material';
import { MovieCardSelected } from '../../components';
import noMoviesImageSrc from '../../assets/cinema.png';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: 'calc(100vh - 30px)',
  position: 'sticky',
  top: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
}));

const MoviesList = styled(Box)(({ theme }) => ({
  overflow: 'auto',
}));

const NoMovies = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const SelectedMoviesSection = ({ selectedMovies, deleteMovie }) => {
  if (!selectedMovies.length) {
    return (
      <SelectedMovies>
        <NoMovies>
          <Box
            component="img"
            sx={{ width: '60%', borderRadius: '50%' }}
            alt="Cinema image"
            src={noMoviesImageSrc}
          />
          <Typography variant="h5" mt={2} color="primary">
            No selected movies
          </Typography>
        </NoMovies>
      </SelectedMovies>
    );
  }

  return (
    <SelectedMovies>
      <MoviesList spacing={2}>
        {selectedMovies.map((movie) => (
          <MovieCardSelected
            key={movie.id}
            movie={movie}
            onCardDelete={deleteMovie}
          />
        ))}
      </MoviesList>
      <Box pt={2}>
        <TextField
          fullWidth
          label="Put the list name"
          id="fullWidth"
          size="small"
        />
      </Box>
    </SelectedMovies>
  );
};

export default SelectedMoviesSection;
