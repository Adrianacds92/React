import React from "react";

import UserIcon from "../assets/user.svg";
import Button from "./Button"
function Header() {
  return (
    <header>
      <div className="logo"></div>
      <div className="menu">
          <Button className="selected" innerText="BTN1"/>
          <Button innerText="BTN2"/>
          <Button innerText="BTN3"/>
          <Button innerText="BTN4"/>
      </div>
      <div className="user-profile">
        <img src={UserIcon} alt="User Profil" />
      </div>
    </header>
  );
}

export default Header;