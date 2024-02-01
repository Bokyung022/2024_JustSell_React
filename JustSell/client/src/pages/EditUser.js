import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { userID } = useParams();
  const [editedData, setEditedData] = useState({});
  let navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/auth/${userID}`);
      setEditedData(response.data);
    } catch (error) {
      console.error("Error fetching user for editing:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userID]);

  const handleInputChange = (e, field) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      console.log("Updating user with ID:", userID);
      console.log("Data to be sent:", editedData);

      await axios.put(`http://localhost:3001/auth/${userID}`, editedData);

      alert("User updated successfully!");
      navigate("/admin"); // Redirect to the admin page after saving
    } catch (error) {
      console.error("Error updating user:", error);
      alert(
        "An error occurred while updating the user. Please try again later."
      );
    }
  };

  const handleCancelClick = () => {
    navigate("/admin"); // Redirect to the admin page without saving
  };

  return (
    <div className="home">
      <div className="center">
        <form>
          <h3>Edit User</h3>

          <div className="box">
            <label htmlFor="userName">Username:</label>
            <input
              className="input"
              type="text"
              id="userName"
              name="userName"
              value={editedData.userName || ""}
              onChange={(e) => handleInputChange(e, "userName")}
            />
          </div>

          <div className="box">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="input"
              type="text"
              id="firstName"
              name="firstName"
              value={editedData.firstName || ""}
              onChange={(e) => handleInputChange(e, "firstName")}
            />
          </div>

          <div className="box">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="input"
              type="text"
              id="lastName"
              name="lastName"
              value={editedData.lastName || ""}
              onChange={(e) => handleInputChange(e, "lastName")}
            />
          </div>

          <div className="box">
            <label htmlFor="email">Email:</label>
            <input
              className="input"
              type="text"
              id="email"
              name="email"
              value={editedData.email || ""}
              onChange={(e) => handleInputChange(e, "email")}
            />
          </div>

          <div className="box">
            <label htmlFor="Phone">Phone Number:</label>
            <input
              className="input"
              type="text"
              id="Phone"
              name="Phone"
              value={editedData.Phone || ""}
              onChange={(e) => handleInputChange(e, "Phone")}
            />
          </div>

          <div className="box">
            <label htmlFor="role">Role:</label>
            <input
              className="input"
              type="text"
              id="role"
              name="role"
              value={editedData.role || ""}
              onChange={(e) => handleInputChange(e, "role")}
            />
          </div>

          <div className="box">
            <label htmlFor="company">Company:</label>
            <input
              className="input"
              type="text"
              id="company"
              name="company"
              value={editedData.company || ""}
              onChange={(e) => handleInputChange(e, "company")}
            />
          </div>

          <div className="box">
            <label htmlFor="isRealtorApproved">Realtor Approved:</label>
            <input
              className="input"
              type="text"
              id="isRealtorApproved"
              name="isRealtorApproved"
              value={editedData.isRealtorApproved || ""}
              onChange={(e) => handleInputChange(e, "isRealtorApproved")}
            />
          </div>

          <div className="box">
            <label htmlFor="realtorCertification">Realtor Certification:</label>
            <input
              className="input"
              type="text"
              id="realtorCertification"
              name="realtorCertification"
              value={editedData.realtorCertification || ""}
              onChange={(e) => handleInputChange(e, "realtorCertification")}
            />
          </div>

          <button className="btn" type="button" onClick={handleSaveClick}>
            Save
          </button>
          <button className="btn" type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
