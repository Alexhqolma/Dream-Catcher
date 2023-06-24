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

interface CustomFormProps<T> {
  data: {
    name: keyof T;
    type: InputType;
    placeholder: string;
    initialValue: string;
  }[];
  onSubmit: (e: any) => void;
  validation: FormType;
}

export const CustomForm: React.FC<CustomFormProps> = ({ data, validation, onSubmit }) => {
  const initialValues: User | Dream | any = {};

  data.forEach((el: { name: string | number; initialValue: string; }) => initialValues[el.name] = el.initialValue);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validationSchema[FormType[validation]],
  });

  return (
    <form className="CustomForm">
      {data.map((el: { name: React.Key | null | undefined; type: InputType; placeholder: string | undefined; }) => (
        <CustomInput
          key={el.name}
          name={String(el.name)}
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
