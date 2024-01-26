import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [listOfProperties, setListOfProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/properties").then((response) => {
      setListOfProperties(response.data);
    });
  }, []);
  return (
    <div>
      {listOfProperties.map((value, key) => {
        return (
          <div className="property">
            <div className="propertyID">{value.propertyID}</div>
            <div className="propertyContents">
              {value.streetNum} <br />
              {value.streetName} <br />
              {value.city} <br />
              {value.province}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
