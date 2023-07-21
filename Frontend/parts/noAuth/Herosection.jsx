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
import ForgotPasswordModal from "@/components/ForgotPasswordModal";

export default function Herosection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showSignLogModal, setShowSignLogModal] = useState(false);
  const [showFemaleLogin, setShowFemaleLogin] = useState(false);
  const [showSignupFemale, setShowSignupFemale] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
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
  const handleForgotChange = (value) => {
    setShowForgotModal(value);
  };
  const handleValueForgotClose = (value) => {
    setShowForgotModal(value);
  };
  const openSignupModal = () => {
    setShowSignupModal(true);
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
                  style={{}}
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
            <button onClick={handleLogin}>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="pink"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9ZM15.8243 13.6235C17.1533 12.523 18 10.8604 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.8604 6.84668 12.523 8.17572 13.6235C4.98421 14.7459 3 17.2474 3 20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20C5 17.7306 7.3553 15 12 15C16.6447 15 19 17.7306 19 20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20C21 17.2474 19.0158 14.7459 15.8243 13.6235Z"
                  fill="#f9096c"
                />
              </svg>
            </button>
            {/* <PersonModal /> */}
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
          onValueForgotChange={handleForgotChange}
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
      {showForgotModal && (
        <ForgotPasswordModal onValueForgotClose={handleValueForgotClose} />
      )}
      {showSignupModal && <SignUpModal />}
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
        {/* <SignUpModal /> */}
        <button
          onClick={openSignupModal}
          className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
        >
          Start chatting
        </button>
        <AuthChatting />
        <p>You will be asked to activate your camera</p>
      </div>
    </section>
  );
}
