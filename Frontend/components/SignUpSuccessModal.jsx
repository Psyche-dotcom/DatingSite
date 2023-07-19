import { useState } from "react";
import Link from "next/link";

const SettingsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className=" border-b-2 py-2 md:border-0">
      {isOpen && (
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

            <div className="pb-10 px-10 bg-white rounded-lg m-auto text-center">
              <h4 className="text-2xl text-semibold mb-2">Link sent to</h4>
              <p className="text-pink mb-2">hhabbey05@gmail.com</p>
              <p>Why confirm?</p>
              <div className="flex justify-center align-center">
                <Image
                  src="/asset/green-mark.png"
                  title="approved icons"
                  height={24}
                  width={24}
                  className="mr-3"
                />
                <p>Faster Matchmaking</p>
              </div>
              <p className="mb-2">Can't find our email?</p>

              <button
                className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
                type="submit"
              >
                Resend activation link!
              </button>
              <button
                className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
                type="submit"
              >
                I will do this later
              </button>
              <p className="mb-2">OR</p>
              <h4 className="text-xl font-bold text-pink mb-2">
                Update your email address
              </h4>
              <p className="mb-2">Your current email address:</p>
              <p className="text-xl text-pink mb-2">hhabbey05@gmail.com</p>
              <form className="register">
                <div className="mb-4">
                  <label for="email" className="mb-3">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Your new email address"
                    className="w-full"
                  />
                </div>
                <button
                  className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
                  type="submit"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

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

export default SettingsModal;
