import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import * as Yup from "yup";

function Filter() {
  let navigate = useNavigate();

  const [listOfProperties, setListProperties] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [errors, setErrors] = useState({});
  const validationSchema = Yup.object().shape({
    location: Yup.string().max(50, "Must be 50 characters or less"),
  });
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/properties/search",
        { params: values }
      );
      console.log("Response data:", response.data);
      setListProperties(response.data);
      setSearchPerformed(true);
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);

      console.error("Error:", error.message);
    }
  };
  const makePayment = (token, property) => {
    const body = {
      token,
      property,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch("http://localhost:3001/payment", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => console.log("response", response))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div class="home">
        <section class="center">
          <section className="filters" style={{ paddingBottom: 0 }}>
            <Formik
              initialValues={{
                location: "",
                propertyType: "apartment",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="form">
                <div id="close-filter">
                  <i className="fas fa-times"></i>
                </div>
                <h3>Find your perfect HOME</h3>
                <div className="flex">
                  <div className="box">
                    <p>Location</p>
                    <Field
                      type="text"
                      name="location"
                      required
                      maxLength="50"
                      placeholder="Search by city or Postal code"
                      className="input"
                    />
                    <ErrorMessage
                      name="location"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="box">
                    <p>Property type</p>
                    <Field
                      as="select"
                      name="propertyType"
                      className="input"
                      required
                    >
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="duplexTriplex">Duplex or Triplex</option>
                      <option value="condo">Condo</option>
                      <option value="commercialBuilding">
                        Commercial Building
                      </option>
                    </Field>
                  </div>
                </div>
                <button type="submit" className="btn">
                  Search Property
                </button>
              </Form>
            </Formik>
          </section>
        </section>
      </div>

      <div id="filter-btn" className="fas fa-filter"></div>
      <section className="listings">
        {searchPerformed ? (
          <>
            <h1 className="heading">Search Results</h1>

            <div className="box-container">
              {listOfProperties.map((property) => (
                <div key={property.propertyID} className="box">
                  <form>
                    <input
                      type="hidden"
                      name="propertyID"
                      value={property.propertyID}
                    />
                    <div className="thumb">
                      <img src={property.imageUrl} alt="Property" />
                    </div>
                    <div className="box">
                      <div className="price">
                        <i className="fas fa-dollar-sign"></i>
                        <span>
                          {property.price
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                        </span>
                      </div>
                      <h3 className="name">{property.propertyType}</h3>
                      <p className="location">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{property.city}</span>
                      </p>
                      <div className="flex">
                        <p>
                          <i className="fas fa-house"></i>
                          <span>{property.propertyType}</span>
                        </p>
                        <p>
                          <i className="fas fa-bed"></i>
                          <span>{property.bedrooms}</span>
                        </p>
                        <p>
                          <i className="fas fa-trowel"></i>
                          <span>{property.constructionStatus}</span>
                        </p>
                        <p>
                          <i className="fas fa-couch"></i>
                          <span>
                            {property.furnished ? "furnished" : "not furnished"}
                          </span>
                        </p>
                        <p>
                          <i className="fas fa-maximize"></i>
                          <span>{property.size}sqft</span>
                        </p>
                      </div>
                      <div className="flex-btn">
                        <button
                          className="btn"
                          onClick={() => {
                            navigate(`/property/${property.propertyID}`);
                          }}
                        >
                          View Details
                        </button>
                        <StripeCheckout
                          stripeKey={process.env.REACT_APP_STRIPE_KEY}
                          token={(token) => makePayment(token, property)}
                          name="Down Payment"
                          amount={property.price}
                        >
                          {/* <button className="btn">Send Offer</button> */}
                        </StripeCheckout>
                      </div>
                    </div>
                  </form>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1 className="heading">Your new property is here!</h1>
        )}
      </section>
    </>
  );
}

export default Filter;
