import {
  Box,
  Button,
  Input,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
// import useMutation from '../helpers/useMutation';
// import useQuery from '../helpers/useQuery';

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
  const [error, setError] = useState('');

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

  const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];
  const URL = '/images';

  const ErrorText = ({ children, ...props }) => (
    <Text fontSize="lg" color="red.300" {...props}>
      {children}
    </Text>
  );

  const [refetch, setRefetch] = useState(0);
  // Adjust or remove the following lines based on your use case
  // const {
  //   mutate: uploadImage,
  //   isLoading: uploading,
  //   error: uploadError,
  // } = useMutation({ url: URL });

  // const {
  //   data: imageUrls = [],
  //   isLoading: imagesLoading,
  //   error: fetchError,
  // } = useQuery(URL, refetch);

  const handleUpLoad = async (e) => {
    const file = e.target.files[0];

    if (!validFileTypes.find((type) => type === file.type)) {
      setError('File must be in JPG/PNG format');
      return;
    }

    // Adjust or remove the following lines based on your use case
    // const form = new FormData();
    // form.append('image', file);

    // await uploadImage(form);
    setTimeout(() => {
      setRefetch((s) => s + 1);
    }, 1000);
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
          {/* Realtor certification upload */}
          <div className="box">
            <label htmlFor="RealtorCertification">Upload Realtor Certification:</label>
            <Box mt={6}>
              <Input id="imageInput" type="file" hidden onChange={handleUpLoad} />
              <Button
                as="label"
                htmlFor="imageInput"
                variant="outline"
                mb={4}
                cursor="pointer"
                // Adjust based on your use case
                // isLoading={uploading}
              >
                Upload
              </Button>
              {error && <ErrorText>{error}</ErrorText>}
              {/* Loading indicators and error messages... */}
            </Box>
          </div>

          {/* Submit button and error display */}
          <button type="submit" className="btn" value="Register Now">
            Register
          </button>

          {errors.length > 0 && (
            <div className="error" style={{ color: 'red' }}>
              <h3>Error(s):</h3>
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error.msg}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Registration;


