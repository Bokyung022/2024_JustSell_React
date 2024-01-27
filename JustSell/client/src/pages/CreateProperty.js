import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProperty() {
  let navigate = useNavigate();
  const initialValues = {
    streetNum: 0,
    streetName: "",
    city: "",
    province: "",
    postal: "",
    description: "",
    price: 0.0,
    bathrooms: 0,
    bedrooms: 0,
    floors: 0,
    size: 0.0,
    furnished: 0,
    propertyType: "",
    yearOfBuilt: 0,
    amenities: "",
    sellOption: "",
    constructionStatus: "",
  };

  const validationSchema = Yup.object().shape({
    streetNum: Yup.number().required(),
    streetName: Yup.string().required(),
    city: Yup.string().required(),
    province: Yup.string().required(),
    postal: Yup.string().required(),
    description: Yup.string().required(),
    price: Yup.number().required(),
    bathrooms: Yup.number().required(),
    bedrooms: Yup.number().required(),
    floors: Yup.number().required(),
    size: Yup.number().required(),
    furnished: Yup.number().required(),
    propertyType: Yup.string().required(),
    yearOfBuilt: Yup.number().required(),
    amenities: Yup.string().required(),
    sellOption: Yup.string().required(),
    constructionStatus: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/properties", data).then((response) => {
      navigate("/listings");
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
          <label>Postal Code: </label>
          <ErrorMessage name="postal" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="postal" />
          <label>Description: </label>
          <ErrorMessage name="description" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="description" />
          <label>Price: </label>
          <ErrorMessage name="price" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="price" />
          <label>Bathrooms: </label>
          <ErrorMessage name="bathrooms" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="bathrooms" />
          <label>Bedrooms: </label>
          <ErrorMessage name="bedrooms" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="bedrooms" />
          <label>Floors: </label>
          <ErrorMessage name="floors" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="floors" />
          <label>Size: </label>
          <ErrorMessage name="size" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="size" />
          <label>Furnished: </label>
          <ErrorMessage name="furnished" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="furnished" />
          <label>Property Type: </label>
          <ErrorMessage name="propertyType" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="propertyType" />
          <label>Year of Built: </label>
          <ErrorMessage name="yearOfBuilt" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="yearOfBuilt" />
          <label>Amenities: </label>
          <ErrorMessage name="amenities" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="amenities" />
          <label>Sell Option: </label>
          <ErrorMessage name="sellOption" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="sellOption" />
          <label>Construction Status: </label>
          <ErrorMessage name="constructionStatus" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="constructionStatus"
          />

          <button type="submit"> Create Property</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateProperty;
