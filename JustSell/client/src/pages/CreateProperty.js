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
    <div className="home">
      <section className="center">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <h3>Creating Property</h3>

            <div className="box">
              <p>Street Number: </p>
              <Field className="input" id="inputCreatePost" name="streetNum" />
              <ErrorMessage
                name="streetNum"
                component="span"
                className="error"
              />
            </div>

            <div className="box">
              <p>Street Name: </p>
              <Field className="input" id="inputCreatePost" name="streetName" />
              <ErrorMessage
                name="streetName"
                component="span"
                className="error"
              />
            </div>

            <div className="box">
              <p>City: </p>
              <Field className="input" id="inputCreatePost" name="city" />
              <ErrorMessage name="city" component="span" className="error" />
            </div>

            <div className="box">
              <p>Province: </p>
              <Field className="input" id="inputCreatePost" name="province" />
              <ErrorMessage
                name="province"
                component="span"
                className="error"
              />
            </div>

            <div className="box">
              <p>Postal Code: </p>
              <Field className="input" id="inputCreatePost" name="postal" />
              <ErrorMessage name="postal" component="span" className="error" />
            </div>

            <div className="box">
              <p>Description: </p>
              <Field
                className="input"
                id="inputCreatePost"
                name="description"
              />
              <ErrorMessage
                name="description"
                component="span"
                className="error"
              />
            </div>

            <div className="box">
              <p>Price: </p>
              <Field
                className="input"
                id="inputCreatePost"
                type="number"
                name="price"
              />
              <ErrorMessage name="price" component="span" className="error" />
            </div>

            <div className="box">
              <p>Bathrooms: </p>
              <Field
                className="input"
                id="inputCreatePost"
                type="number"
                name="bathrooms"
              />
              <ErrorMessage
                name="bathrooms"
                component="span"
                className="error"
              />
            </div>

            <div className="box">
              <p>Bedrooms: </p>
              <Field
                className="input"
                id="inputCreatePost"
                type="number"
                name="bedrooms"
              />
              <ErrorMessage
                name="bedrooms"
                component="span"
                className="error"
              />
            </div>

            <div className="box">
              <p>Floors: </p>
              <Field
                className="input"
                id="inputCreatePost"
                type="number"
                name="floors"
              />
              <ErrorMessage name="floors" component="span" className="error" />
            </div>

            <div className="box">
              <p>Size: </p>
              <Field
                className="input"
                id="inputCreatePost"
                type="number"
                name="size"
              />
              <ErrorMessage name="size" component="span" className="error" />
            </div>

            <div className="box">
              <p>Furnished: </p>
              <Field
                className="input"
                as="select"
                id="inputCreatePost"
                name="furnished"
              >
                <option value={0}>No</option>
                <option value={1}>Yes</option>
              </Field>
            </div>

            <div className="box">
              <p>Property Type: </p>
              <Field
                className="input"
                as="select"
                id="inputCreatePost"
                name="propertyType"
              >
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Duplex or Triplex">Duplex or Triplex</option>
                <option value="Condo">Condo</option>
                <option value="Commercial Building">Commercial Building</option>
              </Field>
            </div>

            <div className="box">
              <p>Year of Built: </p>
              <Field
                className="input"
                id="inputCreatePost"
                type="number"
                name="yearOfBuilt"
              />
              <ErrorMessage
                name="yearOfBuilt"
                component="span"
                className="error"
              />
            </div>

            <div className="box">
              <p>Amenities: </p>
              <Field className="input" id="inputCreatePost" name="amenities" />
              <ErrorMessage
                name="amenities"
                component="span"
                className="error"
              />
            </div>

            <div className="box">
              <p>Offer Type: </p>
              <Field
                className="input"
                as="select"
                id="inputCreatePost"
                name="sellOption"
              >
                <option value="Sale">Sale</option>
                <option value="Resale">Resale</option>
                <option value="Leasing">Leasing</option>
              </Field>
            </div>

            <div className="box">
              <p>Construction Status: </p>
              <Field
                className="input"
                as="select"
                id="inputCreatePost"
                name="constructionStatus"
              >
                <option value="Ready to Move">Ready to Move</option>
                <option value="Under Construction">Under Construction</option>
              </Field>
            </div>

            <button type="submit" className="btn">
              Create Property
            </button>
          </Form>
        </Formik>
      </section>
    </div>
  );
}

export default CreateProperty;
