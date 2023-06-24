import React from 'react';
import { useFormik } from 'formik';

import { User } from '../../../types/User';
import { Dream } from '../../../types/Dream';
import { ButtonType, CustomButton } from '../CustomButton';
import { CustomInput, InputType } from '../CustomInput/CustomInput';
import { validationSchema } from './validation';

export enum FormType {
  USER = 'USER',
  DREAM = 'DREAM'
}

interface InputProperties<T> {
  name: keyof T;
  type: InputType;
  placeholder: string;
  initialValue: string;
}


interface CustomFormProps<T = User | Dream> {
  data: InputProperties<T>[];
  onSubmit: (e: React.MouseEvent) => void;
  validation: FormType;
}

export const CustomForm: React.FC<CustomFormProps> = ({ data, validation, onSubmit }) => {
  const initialValues = {};

  data.forEach((el: { name: string | number; initialValue: string; }) => initialValues[el.name] = el.initialValue);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validationSchema[FormType[validation]],
  });

  return (
    <form className="CustomForm">
      {data.map(el => (
        <CustomInput
          key={el.name}
          name={el.name}
          type={el.type}
          formik={formik}
          placeholder={el.placeholder} />
      ))}

      <div className="CustomForm__controls">
        <CustomButton
          type={ButtonType.BUTTON}
          onClick={() => window.history.go(-1)}
          width={100}
        >
          Back
        </CustomButton>

        <CustomButton
          type={ButtonType.SUBMIT}
          width={100}
        >
          Submit
        </CustomButton>
      </div>
    </form>
  );
};
