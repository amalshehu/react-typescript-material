import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import './LoginForm.css';
import { InputField } from './InputField';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
interface Fields {
  firstName: string;
  lastName: string;
  email: string;
}
interface Props {
  onSubmit: (values: Fields) => void;
}
const useStyles = makeStyles({
  card: {
    minWidth: 400,
    minHeight: 400,
    opacity: 0.8
  },
  content: {
    margin: 30
  },
  title: {
    fontSize: 14,
    margin: 5
  }
});
export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const cardClasses = useStyles();

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {() => (
        <Card className={cardClasses.card}>
          <CardContent className={cardClasses.content}>
            <Typography
              className={cardClasses.title}
              color="textSecondary"
              gutterBottom
            >
              React Material
            </Typography>
            <Typography color="secondary" variant="h5" component="h2">
              Login
            </Typography>

            <Form>
              <div>
                <Field
                  placeholder="First Name"
                  name="firstName"
                  component={InputField}
                ></Field>
              </div>
              <div>
                <Field
                  placeholder="Last Name"
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
                color="secondary"
                className="submit"
                type="submit"
                variant="contained"
              >
                Login
              </Button>
            </Form>
          </CardContent>
        </Card>
      )}
    </Formik>
  );
};
