import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';

const validationSchema = Yup.object({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phonenumber: Yup.number().required('Phone number is required'),
  address1: Yup.string().required('Address 1 is required'),
  address2: Yup.string().required('Address 2 is required'),
  age: Yup.number().required('Age is required'),
  password: Yup.string().required('Password is required'),
});

const UserForm = ({ user, onSubmit }) => {
  const formik = useFormik({
    initialValues: user || {
      firstname: '',
      lastname: '',
      email: '',
      phonenumber: '',
      address1: '',
      address2: '',
      age: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        {user ? 'Update User' : 'Register User'}
      </Typography>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid container spacing={3}>
          {Object.keys(formik.initialValues).map((key) => (
            <Grid item xs={12} key={key}>
              <TextField
                fullWidth
                id={key}
                name={key}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                variant="outlined"
                value={formik.values[key]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[key] && Boolean(formik.errors[key])}
                helperText={formik.touched[key] && formik.errors[key]}
                disabled={user && key === 'email'}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              {user ? 'Update' : 'Register'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserForm;
