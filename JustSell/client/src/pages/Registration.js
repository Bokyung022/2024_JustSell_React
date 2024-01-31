import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Registration() {
  let navigate = useNavigate();
  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    Phone: "",
    streetNum: 0,
    streetName: "",
    city: "",
    province: "",
    postal: "",
    company: "",
    role: "",
    isRealtorApproved: 0,
    realtorCertification: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(3).max(15).required("Username is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().min(4).max(20).required("Password is required"),
    Phone: Yup.string().required("Phone is required"),
    streetNum: Yup.string().required("Street Number is required"),
    streetName: Yup.string().required("Street Name is required"),
    city: Yup.string().required("City is required"),
    province: Yup.string().required("Province is required"),
    postal: Yup.string().required("Postal Code is required"),
    company: Yup.string(),
    role: Yup.string(),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/auth", data)
      .then(() => {
        // handle success
        console.log(data);
        navigate("/login");
      })
      .catch((error) => {
        // handle error
        console.error("AxiosError:", error);
      });
  };

  return (
    <div className="home">
      <div className="center">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <h3>Registration</h3>

            <div className="box">
              <label htmlFor="firstName">First Name:</label>
              <ErrorMessage name="firstName" component="span" />
              <Field
                className="input"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
              />
            </div>

            <div className="box">
              <label htmlFor="lastName">Last Name:</label>
              <ErrorMessage name="lastName" component="span" />
              <Field
                className="input"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>

            <div className="box">
              <label htmlFor="email">Email:</label>
              <ErrorMessage name="email" component="span" />
              <Field
                className="input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="box">
              <label htmlFor="userName">Username:</label>
              <ErrorMessage name="userName" component="span" />
              <Field
                className="input"
                id="userName"
                name="userName"
                placeholder="Enter your username"
              />
            </div>

            <div className="box">
              <label htmlFor="password">Password:</label>
              <ErrorMessage name="password" component="span" />
              <Field
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
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
              <label htmlFor="streetNum">Street Number:</label>
              <ErrorMessage name="streetNum" component="span" />
              <Field
                className="input"
                id="streetNum"
                name="streetNum"
                placeholder="Enter your street number"
              />
            </div>

            <div className="box">
              <label htmlFor="streetName">Street Name:</label>
              <ErrorMessage name="streetName" component="span" />
              <Field
                className="input"
                id="streetName"
                name="streetName"
                placeholder="Enter your street name"
              />
            </div>

            <div className="box">
              <label htmlFor="city">City:</label>
              <ErrorMessage name="city" component="span" />
              <Field
                className="input"
                id="city"
                name="city"
                placeholder="Enter your city"
              />
            </div>

            <div className="box">
              <label htmlFor="province">Province:</label>
              <ErrorMessage name="province" component="span" />
              <Field
                className="input"
                id="province"
                name="province"
                placeholder="Enter your province"
              />
            </div>

            <div className="box">
              <label htmlFor="postal">Postal Code:</label>
              <ErrorMessage name="postal" component="span" />
              <Field
                className="input"
                id="postal"
                name="postal"
                placeholder="Enter your postal code"
              />
            </div>

            <div className="box">
              <label htmlFor="company">Company:</label>
              <ErrorMessage name="company" component="span" />
              <Field
                className="input"
                id="company"
                name="company"
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

            <button
              type="submit"
              className="btn"
              value="Register Now"
              onChange={onSubmit}
            >
              Register
            </button>
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
