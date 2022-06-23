import { Formik } from "formik";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import * as yup from "yup";

import { useState, useEffect } from "react";

import signIn from "../../../images/login-img.webp";
import { Link } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [loginStatus, setLoginStatus] = useState({});
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object({
    username: yup
      .string()
      .min(8, "Must be at least 8 characters")
      .max(30, "must be less than 20 characters")
      .required(),
    password: yup
      .string()
      .min(8, "Must be at least 8 characters")
      .max(20, "Must be less  than 20 characters")
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const { data } = await axios.post("http://localhost:3001/login", values);
      if (data.message) {
        setLoginStatus(data.message);
      } else {
        setLoginStatus(data[0].username);
      }
    } catch (err) {
      console.log(err);
    }

    resetForm();
  };

  useEffect(() => {
    axios.get("http://localhost:3001/login").then((response) => {
      // if (response.data.loggedIn === true) {
      // setLoginStatus(response.data.user[0].username);
      console.log(response);
      // }
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col className="d-flex align-items-center">
          <div className="sign-form__img  w-50 rounded-start d-none d-md-block ">
            <img src={signIn} alt="login" className="d-block m-auto login" />
          </div>
          <div className="width-form-container bg-dark h-100 d-flex align-items-center justify-content-center  rounded-end flex-column px-4 px-md-4 px-lg-5 py-4 py-md-3 py-md-auto">
            <h2 className="display-5 mb-4 text-white">Sign In</h2>
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
                        controlId="validationFormik02"
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
              Don't have an account?
              <Link
                to="/signup"
                className="ms-1 text-primary member-event text-capitalize"
              >
                Sign up
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
