import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfProperties, setListOfProperties] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/properties").then((response) => {
      setListOfProperties(response.data);
    });
  }, []);
  return (
    <div>
      {listOfProperties.map((value, key) => {
        return (
          <div
            className="property"
            onClick={() => {
              navigate(`/property/${value.propertyID}`);
            }}
          >
            <div className="streetNum">{value.streetNum}</div>
            <div className="streetName">{value.streetName}</div>
            <div className="price">{value.price}</div>
            <div className="propertyType">{value.propertyType}</div>
            <div className="yearOfBuilt">{value.yearOfBuilt}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
