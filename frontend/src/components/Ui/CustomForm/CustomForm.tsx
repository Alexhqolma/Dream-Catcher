import React from 'react';
import { useFormik } from 'formik';

import { User } from '../../../types/User';
import { Dream } from '../../../types/Dream';
import { ButtonType, CustomButton } from '../CustomButton';
import { CustomInput, InputType } from '../CustomInput/CustomInput';
import { validation } from './validation';

export enum FormType {
  USER = 'USER',
  DREAM = 'DREAM'
}

interface CustomFormProps {
  data: {
    name: keyof User | keyof Dream;
    type: InputType;
    placeholder: string;
    initialValue: unknown;
  }[];
  onSubmit: (e: any) => void;
  type: FormType;
}

export const CustomForm: React.FC<CustomFormProps> = ({ data, type, onSubmit }) => {
  const initialValues: User | Dream | any = {};

  data.forEach(el => initialValues[el.name] = el.initialValue);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validation[FormType[type]],
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
