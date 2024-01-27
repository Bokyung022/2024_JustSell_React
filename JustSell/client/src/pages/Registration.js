import React, { useState } from 'react';

const Registration = () => {
    const [formData, setFormData] = useState({
      FirstName: '',
      LastName: '',
      Email: '',
      UserName: '',
      Password: '',
      Passcomf: '',
      Phone: '',
      StreetNum: '',
      StreetName: '',
      City: '',
      Province: '',
      Postal: '',
      Company: '',
      Role: '',
      isRealtorApproved: '',
      RealtorCertification: '',
    });
  
    const [errors, setErrors] = useState([]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('/api/registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (data.success) {
          // Registration successful message
          console.log('User registered successfully');
        } else {
          // Registration failed messages
          setErrors(data.errors || []);
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    };
  
    return (
      <div className="home">
      <div className="center">        
        <form onSubmit={handleSubmit}>
        <h3>Registration</h3>
          <div className="box">
            <label htmlFor="FirstName">First Name:</label>
            <input className="input" type="text" id="FirstName" name="FirstName" onChange={handleChange} />
          </div>
          <div className="box">
            <label htmlFor="LastName">Last Name:</label>
            <input className="input" type="text" id="LastName" name="LastName" onChange={handleChange} />
          </div>
          <div className="box">
            <label htmlFor="Email">Email:</label>
            <input className="input" type="email" id="Email" name="Email" onChange={handleChange} />
          </div >
          <div className="box">
            <label htmlFor="UserName">Username:</label>
            <input className="input" ype="text" id="UserName" name="UserName" onChange={handleChange} />
          </div>
          <div className="box">
            <label htmlFor="Password">Password:</label>
            <input className="input" type="password" id="Password" name="Password" onChange={handleChange} />
          </div>
          <div className="box">
            <label htmlFor="Passcomf">Confirm Password:</label>
            <input className="input" type="password" id="Passcomf" name="Passcomf" onChange={handleChange} />
          </div>
          <div className="box">
            <label htmlFor="Phone">Phone:</label>
            <input className="input" type="text" id="Phone" name="Phone" onChange={handleChange} />
          </div>
          <div className="box">
            <label htmlFor="StreetNum">Street Number:</label>
            <input className="input" type="text" id="StreetNum" name="StreetNum" onChange={handleChange} />
          </div>
          <div className="box">
            <label htmlFor="StreetName">Street Name:</label>
            <input className="input" type="text" id="StreetName" name="StreetName" onChange={handleChange} />
          </div>
          <div className="box">
            <label htmlFor="City">City:</label>
            <input className="input" type="text" id="City" name="City" onChange={handleChange} />
          </div >
          <div className="box">
            <label htmlFor="Province">Province:</label>
            <input className="input" type="text" id="Province" name="Province" onChange={handleChange} />
          </div>
          <div className="box">
            <label htmlFor="Postal">Postal Code:</label>
            <input className="input" type="text" id="Postal" name="Postal" onChange={handleChange} />
          </div >
          <div className="box">
            <label htmlFor="Company">Company:</label>
            <input className="input" type="text" id="Company" name="Company" onChange={handleChange} />
          </div>
            {/* Here is the space for the realtor to upload they credential: */}
          <div className="box">
            <label htmlFor="RealtorCertification">Upload Realtor Certification:</label>
            <input className="input" type="text" id="RealtorCertification" name="RealtorCertification" onChange={handleChange} />
          </div>
          <button type="submit">Register</button>
        </form>
        {errors.length > 0 && (
          <div className="error" style={{ color: 'red' }}>
            {/* Display error messages */}
            <h3>Error(s):</h3>
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      </div>
    );

  };
  
  export default Registration;
