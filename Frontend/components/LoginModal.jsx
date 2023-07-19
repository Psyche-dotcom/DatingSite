import { useState } from "react";
import SignupLogin from "@/components/SignupLogin";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setLogin(true);
    setSignup(false);
    // const value = false;
    // onValueBurgerChange(value);
  };

  const openSignModal = () => {
    setIsOpen(true);
    setLogin(false);
    setSignup(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleValueChange = (value) => {
    setIsOpen(false);
    // console.log(value);
  };

  return (
    <div className="p-0">
      <div className="md:flex">
        <button
          onClick={openModal}
          className="block m-auto border-b-2 py-2 md:border-0 w-full"
        >
          Login
        </button>
        {/* <button
          onClick={openSignModal}
          className="border-b-2 py-2 md:border-0 w-full"
        >
          Sign Up
        </button> */}
      </div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content relative bg-white rounded-lg">
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
            <SignupLogin
              log={login}
              sign={signup}
              onValueSignChange={handleValueChange}
            />
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

export default LoginModal;
