import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

import { FormType, validationSchemas } from './validationSchemas';
import { ButtonType, CustomButton } from '../CustomButton';
import { CustomInput } from '../CustomInput';

import './CustomForm.scss';

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
  initialValues: { [value: string]: string };
  startTabIndex: number;
  className: string;
  title?: string;
  cbBackButton?: () => void;
}

export const CustomForm: React.FC<CustomFormProps> = ({
  data,
  onSubmit,
  initialValues,
  validationType,
  startTabIndex,
  className,
  title,
  cbBackButton = () => window.history.go(-1),
}) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object(validationSchemas[validationType]),
  });

  return (
    <>
      {title && <h3 className="CustomForm__title title">{title}</h3>}
      
      <form 
        className={classNames('CustomForm', className)}
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
              tabIndex={index + startTabIndex}
            />
          ))}
        </div>

        <div className="CustomForm__controls" >
          <CustomButton
            type={ButtonType.BUTTON}
            onClick={cbBackButton}
            width={100}
            tabIndex={startTabIndex + data.length + 1}
          >
            Back
          </CustomButton>

          <CustomButton
            type={ButtonType.SUBMIT}
            width={100}
            tabIndex={startTabIndex + data.length + 2}
          >
            Submit
          </CustomButton>
        </div>
      </form>
    </>
  );
};
