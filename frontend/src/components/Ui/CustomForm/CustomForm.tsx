import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ButtonType, CustomButton } from '../CustomButton';
import { CustomInput, InputType } from '../CustomInput/CustomInput';

export enum FormType {
  USER = 'USER',
  LOGIN_USER = 'LOGIN_USER',
  DREAM = 'DREAM'
}

export interface InputProperties<T> {
  name: keyof T;
  type: InputType;
  placeholder: string;
  initialValue: string;
}

interface CustomFormProps<T> {
  data: InputProperties<T>[];
  validationSchema:  Yup.ObjectSchema<any>;
  onSubmit: (e: any) => void;
}

export const CustomForm = <T,>({ 
  data,
  validationSchema,
  onSubmit,
}: CustomFormProps<T>) => {
  const initialValues: Partial<Record<keyof T, string>> = {};

  data.forEach((el) => initialValues[el.name as keyof T] = el.initialValue);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form className="CustomForm">
      {data.map(el => (
        <CustomInput
          key={el.name as string}
          name={el.name as string}
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
