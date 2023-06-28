import React from 'react';
import { useFormik } from 'formik';
// import TaskAltIcon from '@mui/icons-material/TaskAlt';
import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
import { ButtonType, CustomButton } from '../CustomButton';
import { CustomInput, InputType } from '../CustomInput';
import { FormType, validationSchemas } from '../CustomForm/validationSchemas';
import { InitialValues } from '../../RegistrationForm';

type InputProperties = {
  name: string;
  type: InputType;
  placeholder: string;
  initialValue: string;
};

interface CustomFormProps {
  data: InputProperties[];
  onSubmit: (e: any) => void;
  formType: keyof typeof FormType
  initialValues: InitialValues;
}

export const CustomFormTest: React.FC = ({
  data,
  onSubmit,
  formType,
  initialValues
}: CustomFormProps) => {


  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object(validationSchemas[formType])
  });

  return (
    <form className="CustomForm">
      <div className='CustomForm__input'>
        {data.map(el => (
          <CustomInput
            key={el.name as string}
            name={el.name as string}
            type={el.type}
            formik={formik}
            placeholder={el.placeholder} />
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
