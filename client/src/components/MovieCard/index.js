import {
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

const ITEM_HEIGHT = 48;

const MovieCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: 225, position: 'relative' }}>
      <IconButton
        aria-label="settings"
        aria-haspopup="true"
        sx={{ position: 'absolute', top: '0', right: '0' }}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={() => {}}>Add</MenuItem>
      </Menu>
      <CardMedia
        sx={{ display: 'block' }}
        component="img"
        height="295"
        image="https://www.themoviedb.org/t/p/w220_and_h330_face/neMZH82Stu91d3iqvLdNQfqPPyl.jpg"
        alt="Movie's baner"
      />
      <CardContent sx={{ '&:last-child': { paddingBottom: '16px' } }}>
        <Typography variant="h6">The Lost City</Typography>
        <Typography variant="body2" color="text.secondary">
          Mar 24, 2022
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
