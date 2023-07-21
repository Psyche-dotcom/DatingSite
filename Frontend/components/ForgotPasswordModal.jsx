import { useState } from "react";

const ForgotPasswordModal = ({ onValueForgotClose }) => {
  const value = false;
  const closeModal = () => {
    onValueForgotClose(value);
  };
  return (
    <>
      <div className="modal-overlay">
        <div
          className="modal-content relative bg-white rounded-lg"
          style={{ height: "75%" }}
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
            <p>What is the email address associated with your account</p>
            <form className="register">
              <div className="mb-4">
                <label for="email" className="mb-3">
                  Email
                </label>
                <input type="text" placeholder="Email" className="w-full" />
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
    </>
  );
};

export default ForgotPasswordModal;
