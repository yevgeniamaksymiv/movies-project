import {
  Box,
  Typography,
  Modal,
  Paper,
  InputBase,
  Divider,
  IconButton,
  Alert,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { useState } from 'react';

import SocialShare from '../SocialShare';
import { CLOSE_ALERT_DELAY } from '../../const';

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

const ConfirmModal = ({ open, url, title, onClose }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const handleAlert = () => {
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
    }, CLOSE_ALERT_DELAY);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            mt: '24px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="List URL"
            inputProps={{ 'aria-label': 'list url' }}
            value={url}
          />
          <IconButton
            href={url}
            target="_blank"
            sx={{ p: '10px' }}
            aria-label="preview"
          >
            <VisibilityIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <CopyToClipboard text={url} onCopy={handleAlert}>
            <IconButton
              color="primary"
              sx={{ p: '10px' }}
              aria-label="copy to clipboard"
            >
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
        </Paper>
        <Typography id="modal-modal-title" variant="h6" component="h3" mt={3}>
          Share with friends
        </Typography>
        <SocialShare url={url} title={title} />
        {openAlert ? (
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mt: 2 }}
          >
            Copied!
          </Alert>
        ) : null}
      </Box>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  open: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default ConfirmModal;
