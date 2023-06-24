import classNames from "classnames"

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
    <div className={classNames("form__control",
      { 'form__control--error': isError }
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

      {(isTouched && isError) && <div className="form__error">{isError}</div>}
    </div>
  )
}