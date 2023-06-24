import * as Yup from 'yup';
import { FormType } from "./CustomForm";

export const validation = {
  [FormType.USER]: {
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

  [FormType.DREAM]: {
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
};