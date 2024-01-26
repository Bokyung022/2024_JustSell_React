import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Property() {
  let { id } = useParams();
  const [propertyObject, setPropertyObject] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/properties/byId/${id}`)
      .then((response) => {
        setPropertyObject(response.data);
      });
  });
  return (
    <div className="propertyPage">
      <div className="property" id="individual">
        <div className="streetNum">{propertyObject.streetNum}</div>
        <div className="streetName">{propertyObject.streetName}</div>
        <div className="price">{propertyObject.price}</div>
        <div className="propertyType">{propertyObject.propertyType}</div>
        <div className="yearOfBuilt">{propertyObject.yearOfBuilt}</div>
      </div>
    </div>
  );
}

export default Property;
