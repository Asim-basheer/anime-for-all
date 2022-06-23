import { Formik } from "formik";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import * as yup from "yup";
import axios from "axios";

import signUpImg from "../../../images/sign-up.png";
import { Link } from "react-router-dom";

function SignUp() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    user_type: 3,
  };

  const validationSchema = yup.object({
    username: yup
      .string()
      .min(8, "Must be at least 8 characters")
      .max(30, "must be less than 20 characters")
      .required(),
    email: yup.string().email("email format invalid").required(),
    password: yup
      .string()
      .min(8, "Must be at least 8 characters")
      .max(20, "Must be less  than 20 characters")
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), ""], "passwords must match")
      .required("confirm password is a required field"),
  });

  const onSubmit = async (values, { resetForm }) => {
    delete values.confirm_password;
    try {
      const result = await axios.post("http://localhost:3001/register", values);
      console.log(result);
    } catch (error) {
      console.log(error.data.message);
    }
    resetForm();
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex align-items-center">
          <div className="sign-form__img  w-50 rounded-start d-none d-md-block">
            <img src={signUpImg} alt="login" className="d-block m-auto" />
          </div>
          <div className="width-form-container bg-dark h-100 d-flex align-items-center justify-content-center  rounded-end flex-column px-4 px-md-4 px-lg-5 py-4 py-md-3 py-md-auto ">
            <h2 className="display-5 mb-4 text-white ">Sign up</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => {
                return (
                  <Form
                    noValidate
                    onSubmit={handleSubmit}
                    className="text-white"
                  >
                    <Row className="gx-0">
                      <Form.Group
                        as={Col}
                        sm="12"
                        controlId="validationFormik02"
                        className="mb-2"
                      >
                        <Form.Control
                          type="text"
                          name="email"
                          placeholder="Email "
                          value={values.email}
                          onChange={handleChange}
                          isValid={touched.email && !errors.email}
                          isInvalid={!!errors.email && touched.email}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                          <Form.Control.Feedback
                            type="invalid"
                            className="mb-1"
                          >
                            {errors.email}
                          </Form.Control.Feedback>
                        ) : (
                          <Form.Control.Feedback className="mb-1">
                            Looks good!
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>

                      <Form.Group
                        className="mb-2"
                        as={Col}
                        sm="12"
                        controlId="validationFormik01"
                      >
                        <Form.Control
                          type="text"
                          name="username"
                          placeholder="Username "
                          value={values.username}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.username && !errors.username}
                          isInvalid={!!errors.username && touched.username}
                        />
                        {errors.username && touched.username ? (
                          <Form.Control.Feedback
                            type="invalid"
                            className="mb-1"
                          >
                            {errors.username}
                          </Form.Control.Feedback>
                        ) : (
                          <Form.Control.Feedback className="mb-1">
                            Looks good!
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        sm="12"
                        controlId="validationFormik03"
                        className="mb-2"
                      >
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Password "
                          value={values.password}
                          onChange={handleChange}
                          isValid={touched.password && !errors.password}
                          isInvalid={!!errors.password && touched.password}
                          onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (
                          <Form.Control.Feedback
                            type="invalid"
                            className="mb-1"
                          >
                            {errors.password}
                          </Form.Control.Feedback>
                        ) : (
                          <Form.Control.Feedback className="mb-1">
                            Looks good!
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        sm="12"
                        controlId="validationFormik04"
                        className="mb-2"
                      >
                        <Form.Control
                          type="password"
                          name="confirm_password"
                          placeholder="Confirm Password "
                          value={values.confirm_password}
                          onChange={handleChange}
                          isValid={
                            touched.confirm_password && !errors.confirm_password
                          }
                          isInvalid={
                            !!errors.confirm_password &&
                            touched.confirm_password
                          }
                          onBlur={handleBlur}
                        />
                        {errors.confirm_password && touched.confirm_password ? (
                          <Form.Control.Feedback
                            type="invalid"
                            className="mb-1"
                          >
                            {errors.confirm_password}
                          </Form.Control.Feedback>
                        ) : (
                          <Form.Control.Feedback className="mb-1">
                            Looks good!
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>

                      <Button
                        type="submit"
                        className="fw-bolder"
                        disabled={!isValid}
                      >
                        Sign Up
                      </Button>
                    </Row>
                  </Form>
                );
              }}
            </Formik>
            <div className="text-white mt-4">
              Already a member?
              <Link
                to="/signin"
                className="ms-1 text-primary member-event text-capitalize"
              >
                sign in
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
