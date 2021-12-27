import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import MyTextInput from "../../app/common/form/MyTextInput";
import { closeModal } from "../../app/common/modals/modalReducer";
import ModalWrapper from "../../app/common/modals/ModalWrapper";
import { signInUser } from "./autoActions";

export default function LoginForm() {
  const dispatch = useDispatch();
  return (
    <ModalWrapper size="mini" header="Sign in to Re-vents">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, {setSubmitting}) => {
          console.log(values);
          dispatch(signInUser(values))
          setSubmitting(false);
          dispatch(closeModal())
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <MyTextInput name="email" placeholder="Email address" />
            <MyTextInput
              name="password"
              placeholder="Passwornd"
              type="password"
            />
            <Button
              loading={isSubmitting}
              disabled={!dirty || !isValid || isSubmitting}
              type="submit"
              fluid
              size="large"
              color="teal"
              content="Login"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}
