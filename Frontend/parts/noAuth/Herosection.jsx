import React, { useState, useEffect } from "react";
import CustomDropdown from "@/components/CustomDropdown";
import AccountDropdown from "@/components/AccountDropdown";
import BalanceDropDown from "@/components/BalanceDropDown";

import SettingsModal from "@/components/SettingsModal";

import SupportModal from "@/components/SupportModal";
import PersonModal from "@/components/PersonModal";
import SignUpModal from "@/components/SignUpModal";
import ClockBalanceDropDown from "@/components/ClockModal";
import AuthChatting from "@/components/AuthChatting";
import SelectInputForm from "@/components/SelectInputForm";
import SignupLogin from "@/components/SignupLogin";
import IframeComponent from "@/components/IFrame";
import SignupLoginFemale from "@/components/SignupLoginFemale";
import SignupFemale from "@/components/SignupFemale";

export default function Herosection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showSignLogModal, setShowSignLogModal] = useState(false);
  const [showFemaleLogin, setShowFemaleLogin] = useState(false);
  const [showSignupFemale, setShowSignupFemale] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [loginF, setLoginF] = useState(false);
  const [signupF, setSignupF] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
    onClose();
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const openSettings = () => {
    setShowSettings(true);
    setIsOpen(false);
  };
  const openSupportModal = () => {
    setShowSupportModal(true);
    setIsOpen(false);
  };
  const handleLogin = () => {
    setLogin(true);
    setSignup(false);

    setShowSignLogModal(true);
    setIsOpen(false);
  };
  const handleLoginF = () => {
    setLoginF(true);
    setSignupF(false);

    setShowFemaleLogin(true);
    setIsOpen(false);
  };
  const handleSignUp = () => {
    setLogin(false);
    setSignup(true);

    setShowSignLogModal(true);
    setIsOpen(false);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setDropdownOpen(false);
  };
  const handleValueChange = (value) => {
    setShowSignLogModal(value);
  };
  const handleFemaleValueChange = (value) => {
    setShowFemaleLogin(value);
  };
  const handleFemaleValueChangePopup = (val) => {
    setShowSignupFemale(val);
  };
  const handleCloseSignChange = (val) => {
    setShowSignupFemale(val);
  };
  const handleSettingsChange = (value) => {
    setShowSettings(value);
  };
  const handleSupportChange = (value) => {
    setShowSupportModal(value);
  };

  return (
    <section
      className="view-page md:mb-10 text-center md:pb-36 md:pt-24"
      id="element1"
    >
      <h4 className=" text-2xl text-black mb-10 hidden md:block">
        Uk<span className="font-bold">Crush</span>
      </h4>

      <div className="">
        <nav className="md:hidden upper">
          <ul className="flex justify-between">
            <button onClick={openModal} className="mr-auto">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 17H20M4 12H20M4 7H20"
                  stroke="#f9096c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#f9096c"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="modal-overlay relative text-center flex items-start">
                <div
                  className="modal-content bg-white p-4 rounded-lg text-center"
                  style={{ width: "300px" }}
                >
                  <nav className="md:hidden bg-white text-black side-bar">
                    <SelectInputForm />

                    <button
                      onClick={handleLogin}
                      className="block border-b-2 py-2 md:border-0 w-full"
                    >
                      Login
                    </button>

                    <button
                      onClick={handleSignUp}
                      className="block border-b-2 py-2 md:border-0 w-full"
                    >
                      SignUp
                    </button>

                    <button
                      onClick={openSettings}
                      className="border-b-2 py-2 md:border-0"
                    >
                      Settings
                    </button>
                    <button
                      onClick={openSupportModal}
                      className=" border-b-2 py-2 md:border-0"
                    >
                      Support
                    </button>

                    <div className="py-3 border-b-2">
                      <AccountDropdown
                        anchorEl={anchorEl}
                        onClose={handleDropdownClose}
                      />
                    </div>
                    <div className="py-3 border-b-2">
                      <BalanceDropDown className="py-3 border-b-2" />
                    </div>
                  </nav>
                </div>
              </div>
            )}
            <button className="hidden">
              <svg
                fill="#f9096c"
                width="40px"
                height="40px"
                viewBox="0 0 200 200"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
            </button>
            <PersonModal />
            <ClockBalanceDropDown />
          </ul>
        </nav>
      </div>
      {showSettings && (
        <SettingsModal onChangeSettingModal={handleSettingsChange} />
      )}
      {showSupportModal && (
        <SupportModal onValueSupportChange={handleSupportChange} />
      )}
      {showSignLogModal && (
        <SignupLogin
          log={login}
          sign={signup}
          onValueSignChange={handleValueChange}
        />
      )}
      {showFemaleLogin && (
        <SignupLoginFemale
          logF={loginF}
          signF={signupF}
          onValueFemaleSignChange={handleFemaleValueChange}
          onValueFemaleSignupChanged={handleFemaleValueChangePopup}
        />
      )}

      <div className="card-view rounded-lg shadow-xl md:pb-36 overflow-hidden w-100 md:w-75">
        <nav className="hidden md:block bg-white text-black py-5 px-10 mb-20">
          <div className="flex">
            <div className="flex gap-3 mr-auto items-center">
              <button
                onClick={openSupportModal}
                className=" border-b-2 py-2 md:border-0"
              >
                Support
              </button>
              <CustomDropdown
                anchorEl={anchorEl}
                onClose={handleDropdownClose}
              />
            </div>
            <div className="flex gap-3 items-center">
              <button
                onClick={openSettings}
                className="border-b-2 py-2 md:border-0"
              >
                Settings
              </button>
              <button
                onClick={handleLogin}
                className="block border-b-2 py-2 md:border-0 w-full"
              >
                Login
              </button>
              <button
                onClick={handleSignUp}
                className="block border-b-2 py-2 md:border-0 w-full"
              >
                SignUp
              </button>
              <button
                onClick={handleLoginF}
                className="block border-b-2 py-2 md:border-0 w-full"
              >
                LoginF
              </button>
              <AccountDropdown
                anchorEl={anchorEl}
                onClose={handleDropdownClose}
              />
              <BalanceDropDown />
            </div>
          </div>
        </nav>
        {showSignupFemale && (
          <SignupFemale onValueCloseSignChange={handleCloseSignChange} />
        )}
        <h3 className="text-black hidden md:block text-4xl font-semibold mb-10">
          Welcome to the UkCrush video chat
        </h3>
        <h3 className="text-black block md:hidden text-4xl font-semibold mb-10 mt-12">
          Welcome to the
          <br></br>UkCrush video chat
        </h3>
        <h6 className="mt-3">
          <span className="font-bold text-blue">Men</span> are randomly paired
          with <span className="text-pink font-bold">women.</span>
        </h6>
        <h6 className="mb-3">
          <span className="text-pink font-bold">Women</span> are randomly paired
          with <span className="men font-bold text-blue">men.</span>
        </h6>
        <h3 className="text-black text-2xl font-semibold my-10">
          Click to start a chat
        </h3>
        <h6 className="text-semibold text-xl mb-4">
          1 million members from 100+ countries!
        </h6>
        <SignUpModal />
        <AuthChatting />
        <p>You will be asked to activate your camera</p>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          // display: flex;
          // align-items: center;
          // justify-content: center;
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
    </section>
  );
}
