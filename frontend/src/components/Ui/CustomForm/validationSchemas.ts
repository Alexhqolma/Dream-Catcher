import * as Yup from 'yup';

export enum FormType {
  CREATE_USER = 'CREATE_USER',
  LOGIN_USER = 'LOGIN_USER',
  DREAM = 'DREAM',
}

export const validationSchemas = {
  'CREATE_USER': {
    fullName: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
        'Password should be at least 7 characters long, contain digit and uppercase letter'
      )
      .required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords do not match')
      .required()
  },

  'LOGIN_USER': {
    email: Yup.string().email().required(),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
        'Password should be at least 7 characters long, contain digit and uppercase letter'
      )
      .required(),
  },

  'DREAM': {
    title: Yup.string().min(2).required(),
    body: Yup.string().min(2).required(),
  },
};
