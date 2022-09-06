import { Box, Alert, AlertTitle } from '@mui/material';

const ErrorWindow = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #fff',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box sx={style}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        503 Service Unavailable
      </Alert>
    </Box>
  );
};

export default ErrorWindow