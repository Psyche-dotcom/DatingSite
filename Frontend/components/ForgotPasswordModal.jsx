import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
          <button onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
          </button>

          <div className="pd-sm bg-white rounded-lg pt-10">
            <h4 className="modal-header text-black text-center mb-5">
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
