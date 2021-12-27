import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function MyTextArea({ lable, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>
        {lable}
        <textarea {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
