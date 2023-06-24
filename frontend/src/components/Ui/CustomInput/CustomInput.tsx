import classNames from "classnames"
import React from "react"
import "./CustomInput.scss"

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
}

interface CustomInputProps {
  name: string;
  type: InputType;
  formik: any;
  placeholder?: string
}

export const CustomInput: React.FC<CustomInputProps> = ({ 
  type,
  name,
  formik,
  placeholder 
}) => {

  const isError = formik.errors[name];
  const isTouched = formik.touched[name];

  return (
    <div className={classNames("control",
      { 'control__error': isError }
    )}
    >
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder ? placeholder : name.toUpperCase()}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />

      {(isTouched && isError) && <div className="control__error--error">{isError}</div>}
    </div>
  )
}