import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (userID) => {
    try {
      await axios.delete(`http://localhost:3001/auth/${userID}`);
      const response = await axios.get("http://localhost:3001/auth");
      setUsers(response.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditClick = (userID) => {
    setEditingUser(userID);
    const userToEdit = users.find((user) => user.userID === userID);
    setEditedData({ ...userToEdit });
  };

  const handleSaveClick = async (userID) => {
    try {
      console.log("Updating user with ID:", userID);
      console.log("Data to be sent:", editedData);

      const response = await axios.put(
        `http://localhost:3001/auth/${userID}`,
        editedData
      );

      console.log("Response from server:", response.data);

      const updatedUsersResponse = await axios.get(
        "http://localhost:3001/auth"
      );
      setUsers(updatedUsersResponse.data);

      setEditingUser(null);
      setEditedData({});
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleCancelClick = () => {
    setEditingUser(null);
    setEditedData({});
  };

  const handleInputChange = (e, field) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  return (
    <div className="usersPanel">
      {Array.isArray(users) && users.length > 0 ? (
        <div className="usersContainer">
          <div className="usersTable">
            <h1 className="usersHeading">Manage Users Account</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Company</th>
                  <th>Role</th>
                  <th>Realtor Approved</th>
                  <th>Realtor Certification</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.userID}>
                    <td>{user.userID}</td>
                    <td>
                      {editingUser === user.userID ? (
                        <input
                          type="text"
                          value={editedData.userName}
                          onChange={(e) => handleInputChange(e, "userName")}
                        />
                      ) : (
                        user.userName
                      )}
                    </td>
                    <td>
                      {editingUser === user.userID ? (
                        <input
                          type="text"
                          value={editedData.email}
                          onChange={(e) => handleInputChange(e, "email")}
                        />
                      ) : (
                        user.email
                      )}
                    </td>
                    <td>
                      {editingUser === user.userID ? (
                        <input
                          type="text"
                          value={editedData.firstName}
                          onChange={(e) => handleInputChange(e, "firstName")}
                        />
                      ) : (
                        user.firstName
                      )}
                    </td>
                    <td>
                      {editingUser === user.userID ? (
                        <input
                          type="text"
                          value={editedData.lastName}
                          onChange={(e) => handleInputChange(e, "lastName")}
                        />
                      ) : (
                        user.lastName
                      )}
                    </td>
                    <td>
                      {editingUser === user.userID ? (
                        <input
                          type="text"
                          value={editedData.Phone}
                          onChange={(e) => handleInputChange(e, "Phone")}
                        />
                      ) : (
                        user.Phone
                      )}
                    </td>
                    <td>
                      {editingUser === user.userID ? (
                        <input
                          type="text"
                          value={editedData.company}
                          onChange={(e) => handleInputChange(e, "company")}
                        />
                      ) : (
                        user.company
                      )}
                    </td>
                    <td>
                      {editingUser === user.userID ? (
                        <input
                          type="text"
                          value={editedData.role}
                          onChange={(e) => handleInputChange(e, "role")}
                        />
                      ) : (
                        user.role
                      )}
                    </td>
                    <td>
                      {editingUser === user.userID ? (
                        <input
                          type="text"
                          value={editedData.isRealtorApproved}
                          onChange={(e) =>
                            handleInputChange(e, "isRealtorApproved")
                          }
                        />
                      ) : (
                        user.isRealtorApproved
                      )}
                    </td>
                    <td>
                      {editingUser === user.userID ? (
                        <input
                          type="text"
                          value={editedData.realtorCertification}
                          onChange={(e) =>
                            handleInputChange(e, "realtorCertification")
                          }
                        />
                      ) : (
                        user.realtorCertification
                      )}
                    </td>
                    <td>
                      {editingUser === user.userID ? (
                        <>
                          <button
                            className="btn"
                            onClick={() => handleSaveClick(user.userID)}
                          >
                            Save
                          </button>
                          <button className="btn" onClick={handleCancelClick}>
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          className="btn"
                          onClick={() => handleEditClick(user.userID)}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        className="btn"
                        onClick={() => deleteUser(user.userID)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Admin;
