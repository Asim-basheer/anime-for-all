import { Fragment } from "react";
import { Field, ErrorMessage } from "formik";
import IconError from "../IconError";

function CheckboxGroup({ name, options, ...rest }) {
  return (
    <div className="form-control">
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <Fragment key={option.value}>
                <input
                  type="checkbox"
                  id={option.value}
                  checked={field.value.includes(option.value)}
                  {...field}
                  value={option.value}
                />
              </Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={IconError} />
    </div>
  );
}

export default CheckboxGroup;
