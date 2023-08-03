// import { postData } from "@/service/apiCalls/Fetcher";
// import { useState } from "react";

// export default function SignupFemale({ onValueCloseSignChange }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     agreement: "",
//   });
//   const value = false;
//   const [errors, setErrors] = useState({ name: "", email: "" });
//   const closeModal = () => {
//     onValueCloseSignChange(value);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checked") {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: checked,
//       }));
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         agreement: "",
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };
//   const validateForm = () => {
//     let isValid = true;
//     const updatedErrors = {};

//     if (formData.name.trim() === "") {
//       updatedErrors.name = "Name is required";
//       isValid = false;
//     }
//     if (formData.password.trim() === "") {
//       updatedErrors.password = "Password is required";
//       isValid = false;
//     }

//     if (formData.email.trim() === "") {
//       updatedErrors.email = "Email is required";
//       isValid = false;
//     } else if (!isValidEmail(formData.email)) {
//       updatedErrors.email = "Invalid email format";
//       isValid = false;
//     }
//     if (!formData.agreement) {
//       updatedErrors.agreement = "You must agree to the terms and conditions";
//       isValid = false;
//     }

//     setErrors(updatedErrors);
//     return isValid;
//   };
//   const isValidEmail = (email) => {
//     // Basic email format validation using a regular expression
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm())
//       try {
//         const url = "https://example.com/api/users";
//         console.log(formData.name);
//         console.log(formData.email);
//         console.log(formData.password);
//         onValueCloseSignChange(value);
//         // Use the postData function to make the POST request
//         // const response = await postData(url, formData);

//         // Handle the response if needed
//         // console.log('POST request successful:', response);
//       } catch (error) {
//         // Handle errors
//         // console.error('Error making POST request:', error);
//       }
//   };
//   return (
//     <div className="modal-overlay">
//       <div
//         className=" border-b-2 py-2 md:border-0 m-auto bg-white overflow-scroll"
//         style={{ height: "75%" }}
//       >
//         <button onClick={closeModal} className="btn-custom">
//           Close
//         </button>
//         <div className="pd-sm">
//           <h3 className="font-semibold text-3xl">My account</h3>
//           <p>Welcome! Let's start by creating an account.</p>
//           <p>It only takes 3 minutes!</p>
//           <form className="female-register" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label for="username" className="mb-3">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Username"
//                 className="w-full"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && (
//                 <span style={{ color: "red" }}>{errors.name}</span>
//               )}
//             </div>
//             <div className="mb-4">
//               <label for="email" className="mb-3">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="w-full"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && (
//                 <span style={{ color: "red" }}>{errors.email}</span>
//               )}
//             </div>
//             <div className="mb-4">
//               <label for="email" className="mb-3">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="w-full"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-4">
//               <label for="confirm email" className="mb-3">
//                 Confirm email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Confirm Email"
//                 className="w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label for="password" className="mb-3">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 className="w-full"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {errors.password && (
//                 <span style={{ color: "red" }}>{errors.password}</span>
//               )}
//             </div>
//             <div className="mb-5 flex gap-4">
//               <div>
//                 <input
//                   type="checkbox"
//                   className="accept w-1/4"
//                   name="agreement"
//                   checked={formData.agreement}
//                   onChange={handleChange}
//                 />
//                 {errors.agreement && (
//                   <span style={{ color: "red", display: "block" }}>
//                     {errors.agreement}
//                   </span>
//                 )}
//               </div>
//               <p>
//                 I am over 18 years old and I accept the{" "}
//                 <button className="text-pink ml-auto">
//                   Terms & Conditions.
//                 </button>
//               </p>
//             </div>
//             <button className="text-pink underline mr-4" onClick={closeModal}>
//               Back
//             </button>
//             <button className="btn-custom" type="submit">
//               Next
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postData } from "@/service/apiCalls/Fetcher";

const SignupFemale = ({ onValueCloseSignChange }) => {
  const value = false;
  const closeModal = () => {
    onValueCloseSignChange(value);
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    agreement: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "Emails must match")
      .required("Confirm email is required"),
    agreement: Yup.boolean().oneOf(
      [true],
      "You must agree to the terms and conditions"
    ),
  });

  const handleSubmit = async (values) => {
    try {
      const url = "https://example.com/api/users";
      console.log(values.name);
      console.log(values.email);
      console.log(values.password);
      onValueCloseSignChange(value);
      // Use the postData function to make the POST request
      // const response = await postData(url, values);

      // Handle the response if needed
      // console.log('POST request successful:', response);
    } catch (error) {
      // Handle errors
      // console.error('Error making POST request:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div
        className="border-b-2 py-2 md:border-0 m-auto bg-white overflow-scroll"
        style={{ height: "75%" }}
      >
        <button onClick={closeModal} className="btn-custom">
          Close
        </button>
        <div className="pd-sm">
          <h3 className="font-semibold text-3xl">My account</h3>
          <p>Welcome! Let's start by creating an account.</p>
          <p>It only takes 3 minutes!</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="female-register">
              <div className="mb-4">
                <label htmlFor="name" className="mb-3">
                  Username
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="w-full"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-3">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmEmail" className="mb-3">
                  Confirm email
                </label>
                <Field
                  type="email"
                  name="confirmEmail"
                  placeholder="Confirm Email"
                  className="w-full"
                />
                <ErrorMessage
                  name="confirmEmail"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="mb-3">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>
              <div className="mb-5 flex gap-4">
                <div>
                  <Field
                    type="checkbox"
                    className="accept w-1/4"
                    name="agreement"
                  />
                  <ErrorMessage
                    name="agreement"
                    component="span"
                    style={{ color: "red", display: "block" }}
                  />
                </div>
                <p>
                  I am over 18 years old and I accept the{" "}
                  <button className="text-pink ml-auto">
                    Terms & Conditions.
                  </button>
                </p>
              </div>
              <button className="text-pink underline mr-4" onClick={closeModal}>
                Back
              </button>
              <button className="btn-custom" type="submit">
                Next
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupFemale;
