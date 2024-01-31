import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function Property() {
  let { id } = useParams();
  const [property, setProperty] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const propertyResponse = await axios.get(
          `http://localhost:3001/properties/byId/${id}`
        );
        /*
        const imagesResponse = await axios.get(`http://localhost:3001/images/byPropertyId/${id}`);
        */
        setProperty(propertyResponse.data);
        /*
        setImages(imagesResponse.data);
        */
        setLoading(false);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  /*
  const renderImages = () => {
    return images.map((image) => (
      <img key={image.id} src={`images/PropertiesImages/${image.ImageFileName}`} alt="Missing the property picture" className="swiper-slide" />
    ));
  };
  */
  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "payment was successful",
      time: 3000,
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "payment was cancled",
      time: 3000,
    });
  };
  const makePayment = (token) => {
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
      .then((response) => {
        if (response.status === 200) {
          handleSuccess();
        }
      })
      .catch((err) => {
        handleFailure();
        console.log(err);
      });
  };
  const renderAmenities = () => {
    // Assuming property.Amenities is a string with amenities separated by commas
    const amenitiesList = property.amenities
      ? property.amenities.split(",")
      : [];

    return amenitiesList.map((amenity, index) => (
      <p key={index}>
        <i className="fas fa-check"></i>
        <span>{amenity.trim()}</span>
      </p>
    ));
  };

  const renderDetails = () => {
    return (
      <div className="details">
        <h3 className="name">{property.propertyType}</h3>
        <p className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>{`${property.streetNum}-${property.streetName} - ${property.city} - ${property.province} - Postal: ${property.postal}`}</span>
        </p>
        <div className="info">
          <p>
            <i className="fas fa-dollar-sign"></i>
            <span>{new Intl.NumberFormat("en-US").format(property.price)}</span>
          </p>
          <p>
            <i className="fas fa-building"></i>
            <span>{property.propertyType}</span>
          </p>
          <p>
            <i className="fas fa-house"></i>
            <span>{property.sellOption}</span>
          </p>
          <p>
            <i className="fas fa-calendar"></i>
            <span>{property.constructionStatus}</span>
          </p>
        </div>
        <h3 className="title">Details</h3>
        <div className="flex">
          <div className="box">
            <p>
              <i>Deposit Amount (10%) :</i>
              <span>
                <span
                  className="fas fa-dollar-sign"
                  style={{ marginRight: ".5rem" }}
                ></span>
                {new Intl.NumberFormat("en-US").format(property.price / 10)}
              </span>
            </p>
            <p>
              <i>Status :</i>
              <span>{property.constructionStatus}</span>
            </p>
            <p>
              <i>Bedroom :</i>
              <span>{property.bedrooms}</span>
            </p>
            <p>
              <i>Bathroom :</i>
              <span>{property.bathrooms}</span>
            </p>
          </div>
          <div className="box">
            <p>
              <i>Built in :</i>
              <span>{property.yearOfBuilt}</span>
            </p>
            <p>
              <i>Total Floors :</i>
              <span>{property.floors}</span>
            </p>
            <p>
              <i>Furnished :</i>
              <span>
                {property.furnished === 1 ? "Furnished" : "Not Furnished"}
              </span>
            </p>
            <p>
              <i>Loan :</i>
              <span>
                <span
                  className="fas fa-dollar-sign"
                  style={{ marginRight: ".5rem" }}
                ></span>
                {new Intl.NumberFormat("en-US").format(property.price * 0.9)}
              </span>
            </p>
          </div>
        </div>
        <h3 className="title">Amenities</h3>
        <div className="flex">
          <div className="box">{renderAmenities()}</div>
          {/* Render other details */}
        </div>
        <h3 className="title">Description</h3>
        <p className="description">{property.description}</p>
        <div className="flex-btn">
          <div className="btn" onClick={editProperty}>
            Edit Property
          </div>
        </div>
        <div className="flex-btn">
          <div className="btn" onClick={deleteProperty}>
            Delete Property
          </div>
        </div>
        <div className="flex-btn">
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={makePayment}
            name="Down Payment"
            amount={property.price}
          >
            <button className="btn">Send Offer</button>
          </StripeCheckout>
        </div>
      </div>
    );
  };

  const editProperty = () => {
    navigate(`/editProperty/${id}`);
  };

  const deleteProperty = () => {
    axios
      .delete(`http://localhost:3001/properties/${id}`)
      .then(() => {
        navigate("/listings");
      })
      .catch((error) => {
        console.error("Error deleting property:", error);
      });
  };

  return (
    <section className="view-property">
      <h1 className="heading">Property Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : property.propertyID ? (
        renderDetails()
      ) : (
        <p className="empty">Property not found! </p>
      )}
    </section>
  );
}

export default Property;
