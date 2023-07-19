import Link from "next/link";
import { useState } from "react";

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
      <div className="modal-overlay">
        <div
          className="modal-content bg-white rounded-lg relative "
          style={{ width: "400px" }}
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
          <button
            onClick={closeModal}
            className="absolute right-[-19px] top-[-19px] bg-white rounded-full p-2"
          >
            <svg
              fill="#f9096c"
              width="20px"
              height="20px"
              viewBox="0 0 200 200"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
          </button>
          {loginF && (
            <div className=" pb-10">
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

        <style jsx>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.4);
          }

          .modal-content {
            background-color: #fefefe;

            border: 1px solid #888;
            max-width: 500px;
          }

          .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
          }
        `}</style>
      </div>
    </>
  );
}
