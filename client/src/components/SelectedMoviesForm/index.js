import { Paper, TextField, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const SelectedMoviesForm = () => {
  return (
    <Paper
      sx={{
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TextField sx={{ width: '85%' }} label="Put the list name" size="small" />
      <IconButton color="primary">
        <CheckIcon />
      </IconButton>
    </Paper>
  );
};
