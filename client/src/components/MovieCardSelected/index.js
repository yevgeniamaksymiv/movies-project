import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  MenuItem,
} from '@mui/material';
import PropTypes from 'prop-types';
import CardMenu from '../CardMenu';

const MovieCardSelected = ({ movie, onCardDelete }) => {
  return (
    <Card sx={{ display: 'flex', position: 'relative' }}>
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
        <CardMenu>
          <MenuItem onClick={onCardDelete}>Delete</MenuItem>
        </CardMenu>
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
  genre: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  runtime: PropTypes.number.isRequired,
};

export default MovieCardSelected;
