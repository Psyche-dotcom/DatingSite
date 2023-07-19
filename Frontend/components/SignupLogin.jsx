import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CustomModal from "./CustomModal";

export default function SignupLogin({ log, sign, onValueSignChange }) {
  const [login, setLogin] = useState(log);
  const [signup, setSignup] = useState(sign);
  // const [signUpSetting, setSignUpSetting] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);
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
  };
  const closeModal = () => {
    setIsOpen(false);
    const value = false;
    onValueSignChange(value);
  };

  const handleIsForgotOpen = (e) => {
    setIsForgotOpen(true);
    e.preventDefault();
  };

  return (
    <div className=" border-b-2 py-2 md:border-0">
      <div className="modal-overlay">
        <div
          className="modal-content bg-white rounded-lg relative"
          // style={{ maxWidth: "400px" }}
        >
          <div
            className="flex text-center mb-10"
            style={{ background: "#EAEAEA" }}
          >
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
          {signup && (
            <div
              className="px-10 pb-10 m-auto overflow-scroll"
              style={{ width: "400px", maxHeight: "350px" }}
            >
              <form className="register text-start">
                <div className="mb-4">
                  <label for="email" className="mb-3">
                    Email
                  </label>
                  <input type="text" placeholder="Email" className="w-full" />
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
                <div className="mb-5 flex align-center">
                  <div style={{ width: "16px" }} className="mr-4">
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
              className=" pb-10 px-10 m-auto text-start"
              style={{ width: "400px" }}
            >
              <form className="register">
                <div className="mb-4">
                  <label for="email">Email</label>
                  <input type="text" placeholder="Email" className="w-full" />
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
              </form>
              {/* {isForgotOpen && (
                <div className="modal-overlay">
                  <div
                    className="modal-content relative bg-white rounded-lg"
                    style={{ width: "400px", height: "350px" }}
                  >
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

                    <div className="pb-10 px-10 bg-white rounded-lg pt-10">
                      <h4 className="text-2xl text-black text-center mb-10">
                        Forgot password
                      </h4>
                      <p>
                        What is the email address associated with your account
                      </p>
                      <form className="register">
                        <div className="mb-4">
                          <label for="email" className="mb-3">
                            Email
                          </label>
                          <input
                            type="text"
                            placeholder="Email"
                            className="w-full"
                          />
                        </div>

                        <button
                          className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
                          type="submit"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )} */}
              <button
                className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4 block"
                type="submit"
              >
                Login
              </button>
              {/* </form> */}
              <button className="text-pink underline" onClick={showSignup}>
                Create an account
              </button>
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
    </div>
  );
}
