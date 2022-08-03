import { 
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import PropTypes from 'prop-types';

const MovieCardSelected = ({ movie, onCardDelete }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.image}
        alt={movie.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            >
            {movie.releaseDate}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            paddingTop={2}
          >
            {movie.genre[0].name}
          </Typography>
          <Typography
            variant="subtitle3"
            color="text.secondary"
            component="div"
          >
            Film duration: {movie.runtime}m.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
};

MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
  }).isRequired,
  onCardDelete: PropTypes.func,
  genre: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
  })).isRequired,
  runtime: PropTypes.number.isRequired,
};

export default MovieCardSelected;
