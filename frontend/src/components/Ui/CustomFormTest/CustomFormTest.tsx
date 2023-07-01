import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { FormType, validationSchemas } from '../CustomForm/validationSchemas';
import { ButtonType, CustomButton } from '../CustomButton';
import { CustomInput } from '../CustomInput';

import './CustomFormTest.scss';

export type DataValues = {
  name: string;
  type: string;
  placeholder: string;
  initialValue: string;
};

interface CustomFormProps {
  data: DataValues[];
  onSubmit: (e: any) => void;
  validationType: FormType;
  initialValues: { [value: string]: string }
}

export const CustomFormTest: React.FC<CustomFormProps> = ({
  data,
  onSubmit,
  initialValues,
  validationType,
}) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object(validationSchemas[validationType]),
  });

  return (
    <form 
      className="CustomForm" 
      onSubmit={formik.handleSubmit} 
    >
      <div className="CustomForm__input">
        {data.map((el, index) => (
          <CustomInput
            key={el.name as string}
            name={el.name as string}
            type={el.type}
            placeholder={el.placeholder} 
            value={formik.values[el.name]} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            error={formik.errors[el.name]} 
            isTouched={formik.touched[el.name]}
            tabIndex={index + 7}
          />
        ))}
      </div>

      <div className="CustomForm__controls" >
        <CustomButton
          type={ButtonType.BUTTON}
          onClick={() => window.history.go(-1)}
          width={100}
          tabIndex={11}
        >
          Back
        </CustomButton>

        <CustomButton
          type={ButtonType.SUBMIT}
          width={100}
          tabIndex={12}
        >
          Submit
        </CustomButton>
      </div>
    </form>
  );
};
