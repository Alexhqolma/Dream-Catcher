import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ButtonType, CustomButton } from '../CustomButton';
import { CustomInput, InputType } from '../CustomInput';

import './CustomForm.scss';
import { validationSchemas, FormType } from './validationSchemas';

export interface InputProperties<T> {
  name: keyof T;
  type: InputType;
  placeholder: string;
  initialValue: string;
}

interface CustomFormProps<T> {
  data: InputProperties<T>[];
  onSubmit: (e: any) => void;
  formType: keyof typeof FormType
}

export const CustomForm = <T,>({ 
  data,
  onSubmit,
  formType
}: CustomFormProps<T>) => {

  const initialValues: Partial<Record<keyof T, string>> = {};

  data.forEach((el) => initialValues[el.name as keyof T] = el.initialValue);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object(validationSchemas[formType])
  });

  return (
    <form className="CustomForm">
      {data.map(el => (
        <CustomInput
          key={el.name as string}
          name={el.name as string}
          type={el.type}
          formik={formik}
          placeholder={el.placeholder}
          className='CustomForm__input'
        />
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
