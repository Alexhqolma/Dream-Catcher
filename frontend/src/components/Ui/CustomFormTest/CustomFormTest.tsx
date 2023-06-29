import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ButtonType, CustomButton } from '../CustomButton';
import { CustomInput } from '../CustomInput';

import './CustomFormTest.scss';
import { FormType, validationSchemas } from '../CustomForm/validationSchemas';

export type DataValues = {
  name: string;
  type: string;
  placeholder: string;
  initialValue: string;
};

interface CustomFormProps {
  data: DataValues[];
  onSubmit: (e: any) => void;
  // formik: any;
  validationType: FormType;
  initialValues: { [value: string]: string }
}

export const CustomFormTest: React.FC<CustomFormProps> = ({
  data,
  onSubmit,
  // formik,
  initialValues,
  validationType,
}) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object(validationSchemas[validationType]),
  });

  return (
    <form className="CustomForm" onSubmit={formik.handleSubmit} >
      <div className="CustomForm__input">
        {data.map(el => (
          <CustomInput
            key={el.name as string}
            name={el.name as string}
            type={el.type}
            formik={formik}
            placeholder={el.placeholder} 
          />
        ))}
      </div>

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
