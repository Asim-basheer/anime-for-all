import { Fragment } from "react";
import { Field } from "formik";

function RadioButtons({ label, name, options, ...rest }) {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <Fragment key={option.value}>
                <input
                  type="radio"
                  id={option.value}
                  checked={field.value === option.value}
                  {...field}
                  value={option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </Fragment>
            );
          });
        }}
      </Field>
    </div>
  );
}

export default RadioButtons;
