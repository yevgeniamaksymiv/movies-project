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
    <Card sx={{ display: 'flex', position: 'relative', mb: '10px' }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.image}
        alt={movie.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', p: '10px' }}>
          <Typography component="div" variant="h6" lineHeight={1.2}>
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movie.releaseDate}
          </Typography>
        </CardContent>
        <CardMenu>
          <MenuItem onClick={() => onCardDelete(movie)}>Delete</MenuItem>
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
  ),
  runtime: PropTypes.number,
};

export default MovieCardSelected;
