import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import CardMenu from './components';

const MovieCard = ({movie, onCardSelect}) => {

  return (
    <Card sx={{ maxWidth: 225, position: 'relative' }}>
      <CardMenu onAddClick={onCardSelect}/>
      <CardMedia
        sx={{ display: 'block' }}
        component="img"
        height="295"
        image={movie.image}
        alt={movie.title}
      />
      <CardContent sx={{ '&:last-child': { paddingBottom: '16px' } }}>
        <Typography variant="h6">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string
  }).isRequired,
  onCardSelect: PropTypes.func
};

export default MovieCard;
