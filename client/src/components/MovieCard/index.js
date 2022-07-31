import { 
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MovieCard = () => {
  return (
    <Card sx={{ maxWidth: 225, position: "relative" }}>
      <IconButton aria-label="settings" sx={{ position: "absolute", top: "0", right: "0" }}>
        <MoreVertIcon />
      </IconButton>
      <CardMedia
        sx={{ display: "block" }}
        component="img"
        height="295"
        image="https://www.themoviedb.org/t/p/w220_and_h330_face/neMZH82Stu91d3iqvLdNQfqPPyl.jpg"
        alt="Movie's baner"
      />
      <CardContent>
        <Typography variant="h6">The Lost City</Typography>
        <Typography variant="body2" color="text.secondary">
          Mar 24, 2022
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
