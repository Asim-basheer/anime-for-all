import { Field } from "formik";

function Textarea({ label, name, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
    </div>
  );
}

export default Textarea;
