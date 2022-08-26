import React from 'react';
import { styled } from '@mui/material/styles';
import { Paper, Box, Typography } from '@mui/material';
import {
  MovieCardSelected,
  SelectedMoviesForm,
  ConfirmModal,
} from '../../components';
import noMoviesImageSrc from '../../assets/cinema.png';
import { useState } from 'react';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: 'calc(100vh - 30px)',
  position: 'sticky',
  top: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
}));

const MoviesList = styled(Box)(({ theme }) => ({
  overflow: 'auto',
}));

const NoMovies = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const SelectedMoviesSection = ({ selectedMovies, deleteMovie }) => {
  const [listName, setListName] = useState('');
  const [link, setLink] = useState('');

  const onSubmit = ({ listName }) => {
    const ids = selectedMovies.map(({ id }) => id);
    const link = `${
      window.location.host
    }/recommend?title=${listName}&ids=${ids.join()}`;

    setListName(listName);
    setLink(link);
  };

  const onCloseConfirmModal = () => {
    setLink('');
  };

  if (!selectedMovies.length) {
    return (
      <SelectedMovies>
        <NoMovies>
          <Box
            component="img"
            sx={{ width: '60%', borderRadius: '50%' }}
            alt="Cinema image"
            src={noMoviesImageSrc}
          />
          <Typography variant="h5" mt={2} color="primary">
            No selected movies
          </Typography>
        </NoMovies>
      </SelectedMovies>
    );
  }

  return (
    <SelectedMovies>
      <MoviesList spacing={2}>
        {selectedMovies.map((movie) => (
          <MovieCardSelected
            key={movie.id}
            movie={movie}
            onCardDelete={deleteMovie}
          />
        ))}
      </MoviesList>
      <SelectedMoviesForm onSubmit={onSubmit} />
      <ConfirmModal
        url={link}
        title={listName}
        open={!!link}
        onClose={onCloseConfirmModal}
      />
    </SelectedMovies>
  );
};

export default SelectedMoviesSection;
