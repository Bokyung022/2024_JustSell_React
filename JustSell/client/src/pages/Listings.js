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
    <section className="listings">
      <div className="box-container">
        {listOfProperties.map((property) => (
          <form key={property.PropertyID} action="" method="POST">
            <div className="box">
              <input
                type="hidden"
                name="PropertyID"
                value={property.propertyID}
              />
              <div className="thumb">
                <img
                  // src={}
                  alt="Missing the property picture"
                />
              </div>
            </div>
            <div className="box">
              <div className="price">
                <i className="fas fa-dollar-sign"></i>
                <span>
                  {new Intl.NumberFormat("en-US").format(property.price)}
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
                    {property.furnished === 1 ? "Furnished" : "Not Furnished"}
                  </span>
                </p>
                <p>
                  <i className="fas fa-maximize"></i>
                  <span>{property.size}sqft</span>
                </p>
              </div>
            </div>
          </form>
        ))}
      </div>
    </section>
  );
}

export default Home;
