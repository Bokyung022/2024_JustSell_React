import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState([]);

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
      window.alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      window.alert("Error deleting user. Please try again.");
    }
  };

  return (
    <div className="usersPanel">
      <div className="usersContainer">
        <div className="usersTable">
          <h1 className="usersHeading">Manage Users Account</h1>
          <table className="table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th>Company</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.userID}>
                  <td>{user.userID}</td>
                  <td>{user.userName}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.Phone}</td>
                  <td>{user.role}</td>
                  <td>{user.company}</td>
                  <td>
                    <Link to={`/editUser/${user.userID}`}>
                      <button className="btn">Edit</button>
                    </Link>
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
    </div>
  );
};

export default Admin;
