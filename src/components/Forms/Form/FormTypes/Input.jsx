import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input({ name, ...rest }) {
  return (
    <div className="form-control-input">
      <Field id={name} name={name} {...rest} />
      <div className="icon-input"></div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
