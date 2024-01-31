import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Registration() {
  let navigate = useNavigate();
  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    Phone: "",
    streetNum: 0,
    streetName: "",
    city: "",
    province: "",
    postal: "",
    company: "",
    role: "",
    isRealtorApproved: 0,
    realtorCertification: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(3).max(15).required("Username is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().min(4).max(20).required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    Phone: Yup.string().required("Phone is required"),
    role: Yup.string(),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/auth", data)
      .then(() => {
        // handle success
        console.log(data);
        navigate("/login");
      })
      .catch((error) => {
        // handle error
        console.error("AxiosError:", error);
      });
  };

  return (
    <div className="home">
      <div className="center">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, values }) => (
            <Form className="formContainer">
              <h3>Registration</h3>

              <div className="box">
                <label htmlFor="userName">Username:</label>
                <ErrorMessage name="userName" component="span" />
                <Field
                  className="input"
                  id="userName"
                  name="userName"
                  placeholder="Enter your username"
                />
              </div>

              <div className="box">
                <label htmlFor="password">Password:</label>
                <ErrorMessage name="password" component="span" />
                <Field
                  className="input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="box">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <ErrorMessage name="confirmPassword" component="span" />
                <Field
                  className="input"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="box">
                <label htmlFor="firstName">First Name:</label>
                <ErrorMessage name="firstName" component="span" />
                <Field
                  className="input"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="box">
                <label htmlFor="lastName">Last Name:</label>
                <ErrorMessage name="lastName" component="span" />
                <Field
                  className="input"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="box">
                <label htmlFor="email">Email:</label>
                <ErrorMessage name="email" component="span" />
                <Field
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="box">
                <label htmlFor="Phone">Phone:</label>
                <ErrorMessage name="Phone" component="span" />
                <Field
                  className="input"
                  id="Phone"
                  name="Phone"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="box">
                <label htmlFor="role">User Role:</label>
                <ErrorMessage name="role" component="span" />
                <Field
                  as="select"
                  className="input"
                  id="role"
                  name="role"
                  onChange={handleChange}
                >
                  <option value="Client">Client</option>
                  <option value="Realtor">Realtor</option>
                </Field>
              </div>

              {/* Conditionally render fields based on the selected role */}
              {values.role === "Realtor" && (
                <>
                  <div className="box">
                    <label htmlFor="company">Company:</label>
                    <ErrorMessage name="company" component="span" />
                    <Field
                      className="input"
                      id="company"
                      name="company"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="box">
                    <label htmlFor="realtorCertification">
                      Upload Realtor Certification:
                    </label>
                    <ErrorMessage
                      name="realtorCertification"
                      component="span"
                    />
                    <Field
                      className="input"
                      type="file"
                      id="realtorCertification"
                      name="realtorCertification"
                      // onChange={handleUpload}
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                className="btn"
                value="Register Now"
                onChange={onSubmit}
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Registration;
