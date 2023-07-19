import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import CustomModal from "./CustomModal";
import { useState } from "react";
import Link from "next/link";
import SettingsModal from "./SettingsModal";

function AccountDropdown({ onClose }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    setAnchorEl(null);
  };
  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClose();
  };
  const handleSettingsvalue = (value) => {
    setIsOpen(value);
  };

  return (
    <div>
      <button onClick={handleOpen} className="px-auto">
        Account
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <div>
          <MenuItem onClick={openModal}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Log out</MenuItem>
        </div>
      </Menu>
      {isOpen && <SettingsModal onChangeSettingModal={handleSettingsvalue} />}
    </div>
  );
}
export default AccountDropdown;
