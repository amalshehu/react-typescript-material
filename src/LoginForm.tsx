import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';
import './LoginForm.css';

interface Fields {
  firstName: string;
  lastName: string;
  email: string;
}
interface Props {
  onSubmit: (values: Fields) => void;
}

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values, handleBlur, handleChange }) => (
        <Form>
          <div>
            <TextField
              placeholder="FirstName"
              onBlur={handleBlur}
              className="text-color"
              onChange={handleChange}
              name="firstName"
              value={values.firstName}
            ></TextField>
          </div>
          <div>
            <TextField
              onBlur={handleBlur}
              onChange={handleChange}
              className="text-color"
              placeholder="LastName"
              name="lastName"
              value={values.lastName}
            ></TextField>
          </div>
          <div>
            <TextField
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Email"
              className="text-color"
              name="email"
              value={values.email}
            ></TextField>
          </div>
          <Button type="submit" variant="contained">
            submit
          </Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};
