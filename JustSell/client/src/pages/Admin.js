import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth");
        console.log("API Response:", response.data); // Log the response
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <h1 className="heading"> this is the result</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Password</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Company</th>
              <th>Role</th>
              <th>Realtor Approved</th>
              <th>Realtor Certification</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userID}>
                <td>{user.userID}</td>
                <td>{user.userName}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.Phone}</td>
                <td>{user.company}</td>
                <td>{user.role}</td>
                <td>{user.isRealtorApproved}</td>
                <td>{user.realtorCertification}</td>
                <td>
                  <Link
                    to={`edit_users/${user.userID}`}
                    className="btn btn-warning"
                    title="Edit"
                  >
                    <i className="bi bi-pencil"></i>
                  </Link>
                  <Link
                    to={`delete_users/${user.userID}`}
                    className="btn btn-danger"
                    title="Delete"
                  >
                    <i className="bi bi-trash"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
