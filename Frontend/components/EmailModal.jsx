import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const EmailModal = ({ onValueEmailChange }) => {
  const value = false;
  const closeModal = () => {
    onValueEmailChange(value);
  };
  return (
    <>
      <div className="modal-overlay">
        <div className="relative contain-modal-content rounded-lg">
          <div
            className="modal-content bg-white rounded-lg"
            style={{ height: "75%" }}
          >
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
            </button>

            <div className="pd-sm bg-white rounded-lg pt-10">
              <h4 className="modal-header text-black text-center mb-5">
                Change email
              </h4>
              <form className="register">
                <div className="mb-4">
                  <label for="email" className="mb-3">
                    Enter new mail
                  </label>
                  <input type="text" placeholder="Email" className="w-full" />
                </div>

                <button className="btn-custom" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailModal;
