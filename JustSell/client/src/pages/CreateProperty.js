import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function CreatePost() {
  const initialValues = {
    propertyID: "",
    streetNum: "",
    streetName: "",
    city: "",
    province: "",
  };

  const validationSchema = Yup.object().shape({
    propertyID: Yup.string().required(),
    streetNum: Yup.string().required(),
    streetName: Yup.string().required(),
    city: Yup.string().required(),
    province: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/properties", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div className="createPropertyPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Property ID: </label>
          <ErrorMessage name="propertyID" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="propertyID" />
          <label>Street Number </label>
          <ErrorMessage name="streetNum" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="streetNum" />
          <label>Street Name: </label>
          <ErrorMessage name="streetName" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="streetName" />
          <label>City: </label>
          <ErrorMessage name="city" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="city" />
          <label>Province: </label>
          <ErrorMessage name="province" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="province" />

          <button type="submit"> Create Property</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
