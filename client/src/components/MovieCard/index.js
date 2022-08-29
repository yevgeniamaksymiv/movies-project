import {
  Card,
  MenuItem,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CardMenu from '../CardMenu';

const MovieCard = ({ movie, onCardSelect, isPreviewMode }) => {
  return (
    <Card sx={{ maxWidth: '200px', height: '420px', position: 'relative', mx: 'auto' }}>
      {!isPreviewMode && (
        <CardMenu>
          <MenuItem onClick={() => onCardSelect(movie)}>
            <FormattedMessage id="select" />
          </MenuItem>
        </CardMenu>
      )}
      <CardMedia
        sx={{ display: 'block', height: '300px' }}
        component="img"
        image={movie.image}
        alt={movie.title}
      />
      <CardContent
        sx={{ '&:last-child': { paddingBottom: '10px' }, padding: '10px' }}
      >
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
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
    releaseDate: PropTypes.string,
  }).isRequired,
  onCardSelect: PropTypes.func,
  isPreviewMode: PropTypes.bool,
};

export default MovieCard;
