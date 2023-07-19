import { useState } from "react";

export default function SignupFemale({ onValueCloseSignChange }) {
  const closeModal = () => {
    const value = false;
    onValueCloseSignChange(value);
  };

  return (
    <div
      className=" border-b-2 py-2 md:border-0 m-auto bg-white"
      style={{ maxWidth: "800px" }}
    >
      <button onClick={closeModal}>Close</button>
      <div className=" pb-10">
        <h3 className="font-semibold text-3xl">My account</h3>
        <p>Welcome! Let's start by creating an account.</p>
        <p>It only takes 3 minutes!</p>
        <form className="register">
          <div className="mb-4">
            <label for="username" className="mb-3">
              Username
            </label>
            <input type="text" placeholder="Username" />
          </div>
          <div className="mb-4">
            <label for="email" className="mb-3">
              Email
            </label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label for="password" className="mb-3">
              Confirm email
            </label>
            <input type="password" placeholder="Confirm Email" />
          </div>
          <div className="mb-4">
            <label for="password" className="mb-3">
              Confirm Password
            </label>
            <input type="password" placeholder="password" />
          </div>
          <div className="mb-5 flex align-center">
            <input type="checkbox" className="accept" />
            <p>
              I am over 18 years old and I accept the{" "}
              <button className="text-pink ml-auto">Terms & Conditions.</button>
            </p>
          </div>
          <button className="text-pink underline" onClick={closeModal}>
            Back
          </button>
          <button
            className="bg-pink text-white underline px-7 py-4"
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
