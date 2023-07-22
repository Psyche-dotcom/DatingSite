import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function SignupLoginFemale({
  logF,
  signF,
  onValueFemaleSignChange,
  onValueFemaleSignupChanged,
}) {
  const [loginF, setLoginF] = useState(logF);
  const [signupF, setSignupF] = useState(signF);
  const showLogin = () => {
    setSignupF(false);
    setLoginF(true);
  };

  const showSignup = () => {
    setSignupF(true);
    setLoginF(false);
    const value = false;
    onValueFemaleSignChange(value);
    const val = true;
    onValueFemaleSignupChanged(val);
  };
  const closeModal = () => {
    const value = false;
    onValueFemaleSignChange(value);
  };

  return (
    <>
      <div className="modal-overlay px-6">
        <div
          className="modal-content bg-white rounded-lg relative "
          style={{ width: "25rem", height: "75%" }}
        >
          <div
            className="flex text-center mb-10"
            style={{ background: "#EAEAEA" }}
          >
            <button
              className={`w-full p-3 ${signupF ? "class1" : "class2"}`}
              onClick={showSignup}
            >
              Signup
            </button>
            <button
              className={`w-full p-3 ${loginF ? "class1" : "class2"}`}
              onClick={showLogin}
            >
              Login
            </button>
          </div>
          <button onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
          </button>
          {loginF && (
            <div className="px-10 pb-10">
              <form className="register">
                <div className="mb-4">
                  <label for="email" className="mb-3">
                    Email
                  </label>
                  <input type="text" placeholder="Email" />
                </div>
                <div className="mb-4">
                  <label for="password" className="mb-3">
                    Password
                  </label>
                  <input type="password" placeholder="Password" />
                </div>
                <button className="text-pink underline block mb-4">
                  Forgot Password
                </button>
                <button
                  className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <button className="text-pink underline">Create an account</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
