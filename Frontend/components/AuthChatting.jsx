import { useState } from "react";
import Link from "next/link";
import SignLogModal from "./SignLogModal";
import PurchaseTimeModal from "./PurchaseTimeModal";

const AuthChatting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const handleValueChange = (value) => {
    setIsOpen(false);
    // console.log(value);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className=" border-b-2 py-2 md:border-0">
      <button
        onClick={openModal}
        className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
      >
        Start chatting Auth
      </button>
      {isOpen && <PurchaseTimeModal onValueChange={handleValueChange} />}
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
  );
};

export default AuthChatting;
