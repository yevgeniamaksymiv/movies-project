import React from 'react';
import {
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from 'react-share';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';

import { SOCIAL_ICON_SIZE } from '../../const';

const SocialShare = ({ url, title }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        p: '8px 0 0 0',
        columnGap: 1,
      }}
    >
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={SOCIAL_ICON_SIZE} round />
      </TelegramShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={SOCIAL_ICON_SIZE} round />
      </TwitterShareButton>
      <PinterestShareButton url={url} title={title}>
        <PinterestIcon size={SOCIAL_ICON_SIZE} round />
      </PinterestShareButton>
    </Stack>
  );
};

SocialShare.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default SocialShare;
