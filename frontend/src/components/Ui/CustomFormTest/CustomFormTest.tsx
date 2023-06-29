import React from 'react';
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
  formik: any;
}

export const CustomFormTest: React.FC<CustomFormProps> = ({
  data,
  onSubmit,
  formik
}) => {


  return (
    <form className="CustomForm" onSubmit={onSubmit} >
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
