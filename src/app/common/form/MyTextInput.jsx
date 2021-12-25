import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function MyTextInput({lable, ...props}) {
    const [field, meta] = useField(props)
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{lable}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (<Label basic color="red">{meta.error}</Label>) : null}
        </FormField>
    )
}