import * as React from 'react';
import { FieldProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

interface Props extends FieldProps {
  placeholder: string;
}
const useStyles = makeStyles({
  inputBox: {
    minWidth: 350,
    'margin-bottom': '20px',
    'margin-top': '10px'
  }
});
export const InputField: React.FC<Props> = ({ placeholder, field }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.inputBox}
      placeholder={placeholder}
      {...field}
    ></TextField>
  );
};
