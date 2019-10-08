import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import './LoginForm.css';
import { InputField } from './InputField';

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
      {() => (
        <Form>
          <div>
            <Field
              placeholder="FirstName"
              name="firstName"
              component={InputField}
            ></Field>
          </div>
          <div>
            <Field
              placeholder="LastName"
              name="lastName"
              component={InputField}
            ></Field>
          </div>
          <div>
            <Field
              placeholder="Email"
              name="email"
              component={InputField}
            ></Field>
          </div>
          <Button
            color="primary"
            className="submit"
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
