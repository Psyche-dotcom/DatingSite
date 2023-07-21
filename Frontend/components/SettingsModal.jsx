import { useState } from "react";
import Link from "next/link";

const SettingsModal = ({ onChangeSettingModal }) => {
  const closeModal = () => {
    const value = false;
    onChangeSettingModal(value);
  };

  return (
    <div className=" border-b-2 py-2 md:border-0">
      <div className="modal-overlay p-6">
        <div className="modal-content relative bg-white p-4 rounded-lg text-center ">
          <h1 className="modal-header">Visitor settings</h1>
          <p className="text-gray-700 mb-8">
            On LuckyCrush, men are connected with random women, and women with
            random men. This visitor account is a{" "}
            <span className="font-bold">male</span>
            visitor account. Was it a mistake?{" "}
            <Link href="/" className="text-pink underline">
              Click here{" "}
            </Link>
            to log out and reset your gender settings.
          </p>
          <button
            className="rounded-md bg-pink text-white font-extrabold py-4 px-10 m-auto"
            onClick={closeModal}
          >
            Close
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
      {/* <style jsx>{`
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
          justify-self:center
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
      `}</style> */}
    </div>
  );
};

export default SettingsModal;
