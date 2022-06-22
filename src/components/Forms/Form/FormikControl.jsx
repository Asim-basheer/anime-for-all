import Input from "./FormTypes/Input";
import Textarea from "./FormTypes/Textarea";
import Select from "./FormTypes/Select";
import RadioButtons from "./FormTypes/RadioButtons";
import CheckboxGroup from "./FormTypes/CheckboxGroup";
import DatePicker from "./FormTypes/DatePicker";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
