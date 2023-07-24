import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CustomModal from "./CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function SignupLogin({
  log,
  sign,
  onValueSignChange,
  onValueForgotChange,
  onValueSignupSuccessChange,
}) {
  const value = false;
  const showForgot = true;
  const successChange = true;
  const [login, setLogin] = useState(log);
  const [signup, setSignup] = useState(sign);

  const [isOpen, setIsOpen] = useState(false);
  const showLogin = () => {
    setSignup(false);
    setLogin(true);
  };

  const showSignup = () => {
    setSignup(true);
    setLogin(false);
  };
  const openModal = (e) => {
    e.preventDefault();
    onValueSignChange(value);
    onValueSignupSuccessChange(successChange);
  };
  const closeModal = () => {
    setIsOpen(false);
    onValueSignChange(value);
  };

  const handleIsForgotOpen = (e) => {
    onValueForgotChange(showForgot);
    onValueSignChange(value);
    e.preventDefault();
  };

  return (
    <div className=" border-b-2 py-2 md:border-0">
      <div className="modal-overlay">
        <div className="relative contain-modal-content rounded-lg">
          <div
            className="modal-content bg-white rounded-lg"
            style={{ height: "75%" }}
          >
            <div className="flex text-center" style={{ background: "#EAEAEA" }}>
              <button
                className={`w-full p-3 ${signup ? "class1" : "class2"}`}
                onClick={showSignup}
              >
                Signup
              </button>
              <button
                className={`w-full p-3 ${login ? "class1" : "class2"}`}
                onClick={showLogin}
              >
                Login
              </button>
            </div>
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
            </button>
            {signup && (
              <div
                className="pd-sm m-auto overflow-scroll overflow-x-hidden"
                style={{ height: "75%" }}
              >
                <form className="register text-start">
                  <div className="mb-4">
                    <label for="email" className="mb-3">
                      Email
                    </label>
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="mb-4">
                    <label for="username" className="mb-3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label for="password" className="mb-3">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="w-full"
                    />
                  </div>
                  <div className="mb-5 flex items-center">
                    <div style={{ width: "40px" }} className="mr-4 self-center">
                      <input type="checkbox" className="accept " />
                    </div>
                    <p>
                      I am over 18 years old and I accept the{" "}
                      <Link
                        className="text-pink ml-auto"
                        target="_blank"
                        href="/"
                      >
                        Terms & Conditions.
                      </Link>
                    </p>
                  </div>
                  <button
                    className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
                    type="submit"
                    onClick={openModal}
                  >
                    Sign Up
                  </button>
                </form>
                <button className="text-pink underline" onClick={showLogin}>
                  I already have an account
                </button>
              </div>
            )}
            {login && (
              <div
                className="pd-sm m-auto text-start overflow-scroll overflow-x-hidden"
                style={{ height: "75%" }}
              >
                <form className="register">
                  <div className="mb-4">
                    <label for="email">Email</label>
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="mb-4">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full"
                    />
                  </div>
                  <button
                    className="text-pink underline block mb-4"
                    onClick={handleIsForgotOpen}
                  >
                    Forgot Password
                  </button>
                  <button
                    className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4 block"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
                {/* </form> */}
                <button className="text-pink underline" onClick={showSignup}>
                  Create an account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
