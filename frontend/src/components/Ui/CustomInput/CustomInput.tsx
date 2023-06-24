import classNames from "classnames"

type CustomInputProps = {
  formik: any
}

const CustopInput: React.FC<CustomInputProps> = ({ formik }) => {
  return (
    <div className={classNames("form__control",
      { 'form__control--error': formik.touched.confirmPassword && formik.errors.confirmPassword }
    )}
    >
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        placeholder='Confirm Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className="form__error">{formik.errors.confirmPassword}</div>
      ) : null}
    </div>
  )
}

export default CustopInput