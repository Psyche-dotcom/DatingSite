import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AccountDetailsModal = ({ onValueAccDetailsChange }) => {
  const closeModal = () => {
    const value = false;
    onValueAccDetailsChange(value);
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal-content relative bg-white rounded-lg"
        style={{ height: "75%" }}
      >
        <button
          onClick={closeModal}
          // className="absolute right-[-19px] top-[-19px] bg-white rounded-full p-2"
        >
          <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
        </button>

        <div className="pb-10 px-10 bg-white rounded-lg m-auto py-4">
          <h4 className="text-3xl text-semibold mb-2 text-black text-center">
            Account settings
          </h4>
          <p className="mb-2 text-black">
            On LuckyCrush, men are connected with random women, and women with
            random men. This member account is a male member account. Was it a
            mistake?{" "}
            <Link href="#" className="text-pink underline pr-1">
              Click here
            </Link>
            Click here to log out and reset your gender settings
          </p>
          <p>
            Username: hhabbey05{" "}
            <Link href="/" className="text-pink">
              Edit
            </Link>
          </p>

          <p className="mb-2">
            Email: hhabbey05@gmail.com{" "}
            <Link href="/" className="text-pink">
              Edit
            </Link>
          </p>

          <p className="mb-2">
            Password{" "}
            <Link href="/" className="text-pink">
              Edit
            </Link>
          </p>
          <p className="mb-2">
            Note: Your username is the only information other users can see. All
            other information is strictly confidential.
          </p>
          <Link href="/">Delete my account</Link>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsModal;
