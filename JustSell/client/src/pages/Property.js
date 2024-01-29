import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Property() {
  let { id } = useParams();
  const [property, setProperty] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/properties/byId/${id}`)
      .then((response) => {
        setProperty(response.data);
      });
  }, [id]);

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
    <div className="propertyPage">
      <div className="property" id="individual">
        <div className="streetNum">{property.streetNum}</div>
        <div className="streetName">{property.streetName}</div>
        <div className="price">{property.price}</div>
        <div className="propertyType">{property.propertyType}</div>
        <div className="yearOfBuilt">{property.yearOfBuilt}</div>

        <button onClick={editProperty}>Edit</button>
        <button onClick={deleteProperty}>Delete</button>
      </div>
    </div>
  );
}

export default Property;
