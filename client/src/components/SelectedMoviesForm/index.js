import { Paper, TextField, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Form, Field } from 'react-final-form';

const SelectedMoviesForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.listName) {
          errors.listName = 'Required';
        }
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Paper
            sx={{
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Field name="listName">
              {({ input, meta }) => (
                <>
                  <TextField
                    sx={{ width: '65%' }}
                    label="Put the list name"
                    size="small"
                    {...input}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </>
              )}
            </Field>
            <IconButton type="submit" color="primary">
              <CheckIcon />
            </IconButton>
          </Paper>
        </form>
      )}
    />
  );
};

export default SelectedMoviesForm;