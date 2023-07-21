import { useState } from "react";
import Link from "next/link";
import SignLogModal from "./ForgotPasswordModal";
import PurchaseTimeModal from "./PurchaseTimeModal";

const SignupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    // <div className=" border-b-2 py-2 md:border-0">
    //   <button
    //     onClick={openModal}
    //     className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
    //   >
    //     Start chatting
    //   </button>
    //   {isOpen && (
    <div className="modal-overlay px-6">
      <div
        className="modal-content relative bg-white px-8 py-8 rounded-lg"
        style={{ height: "75%" }}
      >
        <h4 className="modal-header">Signup to continue chatting</h4>
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
            <input type="text" placeholder="Username" className="w-full" />
          </div>
          <div className="mb-4">
            <label for="password" className="mb-3">
              Password
            </label>
            <input type="password" placeholder="password" className="w-full" />
          </div>
          <div className="mb-5 flex align-center">
            <input type="checkbox" className="accept mr-4 w-full" />
            <p>
              I am over 18 years old and I accept the{" "}
              <button className="text-pink ml-auto">Terms & Conditions.</button>
            </p>
          </div>
          <button
            className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4 mx-auto"
            type="submit"
          >
            Continue chatting
          </button>
        </form>
        <button className="text-pink underline">
          I already have an account
        </button>
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
      </div>
    </div>
    // )}
    // </div>
  );
};

export default SignupModal;
