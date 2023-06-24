import classNames from "classnames"

type CustomInputProps = {
  id?: string,
  name?: string,
  type?: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void,
  value: string,
  isError: string | false | undefined,
  isTouched: boolean | undefined,
  placeholder: string
}

const CustomInput: React.FC<CustomInputProps> = ({ 
  id,
  name,
  type,
  handleChange, 
  handleBlur, 
  value, 
  isError, 
  isTouched, 
  placeholder 
}) => {
  return (
    <div className={classNames("form__control",
      { 'form__control--error': isError }
    )}
    >
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {isTouched && isError ? (
        <div className="form__error">{isError}</div>
      ) : null}
    </div>
  )
}

export default CustomInput