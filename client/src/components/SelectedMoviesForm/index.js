import { Paper, TextField, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Form, Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

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
                  <FormattedMessage id="put_the_list_name">
                    {
                      label =>
                        <TextField
                          sx={{ width: '65%' }}
                          label={label}
                          size="small"
                          {...input}
                        />
                    }
                  </FormattedMessage>
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
