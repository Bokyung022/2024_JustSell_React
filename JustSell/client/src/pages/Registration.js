import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
// import useMutation from '../helpers/useMutation';
// import useQuery from '../helpers/useQuery';

function Registration() {
  const initialValues = {
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
  };

  const validationSchema = Yup.object().shape({
    FirstName: Yup.string().required('First Name is required'),
    LastName: Yup.string().required('Last Name is required'),
    Email: Yup.string().email('Invalid email address').required('Email is required'),
    UserName: Yup.string().min(3).max(15).required('Username is required'),
    Password: Yup.string().min(4).max(20).required('Password is required'),
    Passcomf: Yup.string().oneOf([Yup.ref('Password'), null], 'Passwords must match'),
    Phone: Yup.string().required('Phone is required'),
    StreetNum: Yup.string().required('Street Number is required'),
    StreetName: Yup.string().required('Street Name is required'),
    City: Yup.string().required('City is required'),
    Province: Yup.string().required('Province is required'),
    Postal: Yup.string().required('Postal Code is required'),
    Company: Yup.string(),
    Role: Yup.string(),
  });

  const onSubmit = (data) => {
    axios.post("http://fsd10-justselldb.cj4k4u2em2n1.us-east-1.rds.amazonaws.com/auth", data,{ timeout: 80000 }).then(() => {
      // handle success
    console.log(data);
  })
  .catch(error => {
    // handle error
    console.error('AxiosError:', error);
  });
  
  };


  return (
    <div className="home">
     <div className="center">
      {""}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >        
        <Form className="formContainer">
        <h3>Registration</h3>
          <div className="box">            
            <label htmlFor="FirstName">First Name:</label>
            <ErrorMessage name="FirstName" component="span" />
            <Field
              className="input"
              id="FirstName"
              name="FirstName"
              placeholder="Enter your first name"
            />
          </div>

          <div className="box">
            <label htmlFor="LastName">Last Name:</label>
            <ErrorMessage name="LastName" component="span" />
            <Field
              className="input"
              id="LastName"
              name="LastName"
              placeholder="Enter your last name"
            />
          </div>

          <div className="box">
            <label htmlFor="Email">Email:</label>
            <ErrorMessage name="Email" component="span" />
            <Field
              className="input"
              type="email"
              id="Email"
              name="Email"
              placeholder="Enter your email"
            />
          </div>

          <div className="box">
            <label htmlFor="UserName">Username:</label>
            <ErrorMessage name="UserName" component="span" />
            <Field
              className="input"
              id="UserName"
              name="UserName"
              placeholder="Enter your username"
            />
          </div>

          <div className="box">
            <label htmlFor="Password">Password:</label>
            <ErrorMessage name="Password" component="span" />
            <Field
              className="input"
              type="password"
              id="Password"
              name="Password"
              placeholder="Enter your password"
            />
          </div>

          <div className="box">
            <label htmlFor="Passcomf">Confirm Password:</label>
            <ErrorMessage name="Passcomf" component="span" />
            <Field
              className="input"
              type="password"
              id="Passcomf"
              name="Passcomf"
              placeholder="Confirm your password"
            />
          </div>

          <div className="box">
            <label htmlFor="Phone">Phone:</label>
            <ErrorMessage name="Phone" component="span" />
            <Field
              className="input"
              id="Phone"
              name="Phone"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="box">
            <label htmlFor="StreetNum">Street Number:</label>
            <ErrorMessage name="StreetNum" component="span" />
            <Field
              className="input"
              id="StreetNum"
              name="StreetNum"
              placeholder="Enter your street number"
            />
          </div>

          <div className="box">
            <label htmlFor="StreetName">Street Name:</label>
            <ErrorMessage name="StreetName" component="span" />
            <Field
              className="input"
              id="StreetName"
              name="StreetName"
              placeholder="Enter your street name"
            />
          </div>

          <div className="box">
            <label htmlFor="City">City:</label>
            <ErrorMessage name="City" component="span" />
            <Field
              className="input"
              id="City"
              name="City"
              placeholder="Enter your city"
            />
          </div>

          <div className="box">
            <label htmlFor="Province">Province:</label>
            <ErrorMessage name="Province" component="span" />
            <Field
              className="input"
              id="Province"
              name="Province"
              placeholder="Enter your province"
            />
          </div>

          <div className="box">
            <label htmlFor="Postal">Postal Code:</label>
            <ErrorMessage name="Postal" component="span" />
            <Field
              className="input"
              id="Postal"
              name="Postal"
              placeholder="Enter your postal code"
            />
          </div>

          <div className="box">
            <label htmlFor="Company">Company:</label>
            <ErrorMessage name="Company" component="span" />
            <Field
              className="input"
              id="Company"
              name="Company"
              placeholder="Enter your company name"
            />
          </div>

          {/* <div className="box">
            <label htmlFor="RealtorCertification">Upload Realtor Certification:</label>
            <ErrorMessage name="RealtorCertification" component="span" />
            <Field  
              className="input"
              type="file"
              id="RealtorCertification"
              name="RealtorCertification"
              // onChange={handleUpload}
            />
          </div> */}

          <button type="submit" className="btn" value="Register Now">Register</button>
        </Form>
      </Formik>
    </div>
    </div>
    
  );
}











//   return (
//     <div className="home">
//       <div className="center">
//         <form onSubmit={handleSubmit}>
//         <h3>Registration</h3>
//           <div className="box">
//             <label htmlFor="FirstName">First Name:</label>
//             <input className="input" type="text" id="FirstName" name="FirstName" onChange={handleChange} />
//           </div>
//           <div className="box">
//             <label htmlFor="LastName">Last Name:</label>
//             <input className="input" type="text" id="LastName" name="LastName" onChange={handleChange} />
//           </div>
//           <div className="box">
//             <label htmlFor="Email">Email:</label>
//             <input className="input" type="email" id="Email" name="Email" onChange={handleChange} />
//           </div >
//           <div className="box">
//             <label htmlFor="UserName">Username:</label>
//             <input className="input" ype="text" id="UserName" name="UserName" onChange={handleChange} />
//           </div>
//           <div className="box">
//             <label htmlFor="Password">Password:</label>
//             <input className="input" type="password" id="Password" name="Password" onChange={handleChange} />
//           </div>
//           <div className="box">
//             <label htmlFor="Passcomf">Confirm Password:</label>
//             <input className="input" type="password" id="Passcomf" name="Passcomf" onChange={handleChange} />
//           </div>
//           <div className="box">
//             <label htmlFor="Phone">Phone:</label>
//             <input className="input" type="text" id="Phone" name="Phone" onChange={handleChange} />
//           </div>
//           <div className="box">
//             <label htmlFor="StreetNum">Street Number:</label>
//             <input className="input" type="text" id="StreetNum" name="StreetNum" onChange={handleChange} />
//           </div>
//           <div className="box">
//             <label htmlFor="StreetName">Street Name:</label>
//             <input className="input" type="text" id="StreetName" name="StreetName" onChange={handleChange} />
//           </div>
//           <div className="box">
//             <label htmlFor="City">City:</label>
//             <input className="input" type="text" id="City" name="City" onChange={handleChange} />
//           </div >
//           <div className="box">
//             <label htmlFor="Province">Province:</label>
//             <input className="input" type="text" id="Province" name="Province" onChange={handleChange} />
//           </div>
//           <div className="box">
//             <label htmlFor="Postal">Postal Code:</label>
//             <input className="input" type="text" id="Postal" name="Postal" onChange={handleChange} />
//           </div >
//           <div className="box">
//             <label htmlFor="Company">Company:</label>
//             <input className="input" type="text" id="Company" name="Company" onChange={handleChange} />
//           </div>
//           {/* Realtor certification upload */}
//           <div className="box">
//             <label htmlFor="RealtorCertification">Upload Realtor Certification:</label>
//             <Box mt={6}>
//               <Input id="imageInput" type="file" hidden onChange={handleUpLoad} />
//               <Button
//                 as="label"
//                 htmlFor="imageInput"
//                 variant="outline"
//                 mb={4}
//                 cursor="pointer"
//                 // Adjust based on your use case
//                 // isLoading={uploading}
//               >
//                 Upload
//               </Button>
//               {error && <ErrorText>{error}</ErrorText>}
//               {/* Loading indicators and error messages... */}
//             </Box>
//           </div>

//           {/* Submit button and error display */}
//           <button type="submit" className="btn" value="Register Now">
//             Register
//           </button>

//           {errors.length > 0 && (
//             <div className="error" style={{ color: 'red' }}>
//               <h3>Error(s):</h3>
//               <ul>
//                 {errors.map((error, index) => (
//                   <li key={index}>{error.msg}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

export default Registration;


