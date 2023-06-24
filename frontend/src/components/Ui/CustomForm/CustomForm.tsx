import React from 'react';
import { useFormik } from 'formik';
import { ButtonType, CustomButton } from '../CustomButton/index.tsx';
import { CustomInput, InputType } from '../CustomInput/CustomInput.tsx';
import { validationSchema } from './validationSchema.ts';

export enum FormType {
  USER = 'USER',
  DREAM = 'DREAM'
}

interface CustomFormProps<T> {
  data: {
    name: string;
    type: InputType;
    placeholder: string;
    initialValues: T;
  }[];
  onSubmit: () => void;
  validation: FormType;
}

export const CustomForm = <T,>({ data, validation, onSubmit }: CustomFormProps<T>) => {
  const initialValues: Record<string, T> = {};

  data.forEach(el => initialValues[el.name] = el.initialValues);

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
