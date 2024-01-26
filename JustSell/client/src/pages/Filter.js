import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Filter() {
  let navigate = useNavigate();
  const [listOfProperties, setListProperties] = useState([]);
  const initialValues = {
    location: "",
    sellOption: "sale",
    propertyType: "apartment",
    bedrooms: "1",
    minBudget: "0",
    maxBudget: "50000",
  };
  const validationSchema = Yup.object().shape({
    location: Yup.string().max(50, "Must be 50 characters or less"),
  });
  const onSubmit = async (data) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/properties/search",
        { params: data }
      );
      setListProperties(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section className="filters" style={{ paddingBottom: 0 }}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div id="close-filter">
              <i className="fas fa-times"></i>
            </div>
            <h3>Filter your search</h3>
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
                <p>Offer type</p>
                <Field as="select" name="sellOption" className="input" required>
                  <option value="sale">Sale</option>
                  <option value="resale">Resale</option>
                  <option value="leasing">Leasing</option>
                </Field>
                <ErrorMessage
                  name="sellOption"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <button type="submit" className="btn">
              Search Property
            </button>
          </Form>
        </Formik>
      </section>

      <section className="listings">
        {listOfProperties.length > 0 ? (
          <>
            <h1 className="heading">Search Results</h1>
            <div className="box-container">
              {listOfProperties.map((property) => (
                <div key={property.PropertyID} className="box">
                  <Form action="" method="POST">
                    <input
                      type="hidden"
                      name="PropertyID"
                      value={property.PropertyID}
                    />
                    <div className="thumb">
                      <img
                        src={`images/PropertiesImages/${property.ImageFileName}`}
                        alt="Property"
                      />
                    </div>
                  </Form>
                  <div className="box">
                    <div className="price">
                      <i className="fas fa-dollar-sign"></i>
                      <span>
                        {property.Price.toFixed(2).replace(
                          /\d(?=(\d{3})+\.)/g,
                          "$&,"
                        )}
                      </span>
                    </div>
                    <h3 className="name">{property.PropertyType}</h3>
                    <p className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{property.City}</span>
                    </p>
                    <div className="flex">
                      <p>
                        <i className="fas fa-house"></i>
                        <span>{property.PropertyType}</span>
                      </p>
                      <p>
                        <i className="fas fa-bed"></i>
                        <span>{property.Bedrooms}</span>
                      </p>
                      <p>
                        <i className="fas fa-trowel"></i>
                        <span>{property.ConstructionStatus}</span>
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
                          navigate(`/property/${property.PropertyID}`);
                        }}
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => {
                          navigate(`/property/${property.PropertyID}`);
                        }}
                        className="btn"
                      >
                        Send Offer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1 className="heading">Find your new Home!</h1>
        )}
      </section>
    </>
  );
}

export default Filter;
