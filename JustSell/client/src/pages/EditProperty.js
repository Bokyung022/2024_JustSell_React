import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProperty() {
  let { id } = useParams();
  const [propertyObject, setPropertyObject] = useState({});
  const [editedData, setEditedData] = useState({
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
  });
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/properties/byId/${id}`)
      .then((response) => {
        setPropertyObject(response.data);
        setEditedData(response.data);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    axios
      .put(`http://localhost:3001/properties/${id}`, editedData)
      .then(() => {
        navigate(`/property/${id}`);
      })
      .catch((error) => {
        console.error("Error updating property:", error);
      });
  };

  return (
    <div className="editPropertyPage">
      <div className="property" id="editIndividual">
        <label>Street Number:</label>
        <input
          type="number"
          name="streetNum"
          value={editedData.streetNum}
          onChange={handleInputChange}
        />
        <label>Street Name:</label>
        <input
          type="text"
          name="streetName"
          value={editedData.streetName}
          onChange={handleInputChange}
        />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={editedData.city}
          onChange={handleInputChange}
        />
        <label>Province:</label>
        <input
          type="text"
          name="province"
          value={editedData.province}
          onChange={handleInputChange}
        />
        <label>Postal Code:</label>
        <input
          type="text"
          name="postal"
          value={editedData.postal}
          onChange={handleInputChange}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={editedData.description}
          onChange={handleInputChange}
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={editedData.price}
          onChange={handleInputChange}
        />
        <label>Bathrooms:</label>
        <input
          type="number"
          name="bathrooms"
          value={editedData.bathrooms}
          onChange={handleInputChange}
        />
        <label>Bedrooms:</label>
        <input
          type="number"
          name="bedrooms"
          value={editedData.bedrooms}
          onChange={handleInputChange}
        />
        <label>Floors:</label>
        <input
          type="number"
          name="floors"
          value={editedData.floors}
          onChange={handleInputChange}
        />
        <label>Size:</label>
        <input
          type="number"
          name="size"
          value={editedData.size}
          onChange={handleInputChange}
        />
        <label>Furnished:</label>
        <input
          type="number"
          name="furnished"
          value={editedData.furnished}
          onChange={handleInputChange}
        />
        <label>Property Type:</label>
        <input
          type="text"
          name="propertyType"
          value={editedData.propertyType}
          onChange={handleInputChange}
        />
        <label>Year of Built:</label>
        <input
          type="number"
          name="yearOfBuilt"
          value={editedData.yearOfBuilt}
          onChange={handleInputChange}
        />
        <label>Amenities:</label>
        <input
          type="text"
          name="amenities"
          value={editedData.amenities}
          onChange={handleInputChange}
        />
        <label>Sell Option:</label>
        <input
          type="text"
          name="sellOption"
          value={editedData.sellOption}
          onChange={handleInputChange}
        />
        <label>Construction Status:</label>
        <input
          type="text"
          name="constructionStatus"
          value={editedData.constructionStatus}
          onChange={handleInputChange}
        />
        <button onClick={handleEditClick}>Save Changes</button>
      </div>
    </div>
  );
}

export default EditProperty;
