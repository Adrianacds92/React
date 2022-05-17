import React from "react";
import UserIcon from "../assets/user.svg";
import Button from "./Button";

function Header() {
  return (
    <header>
      <div className="area-header"></div>
      <div className="menu">
        <Button className="selected" innerText="BTN1" />
        <Button innerText="BTN2" />
        <Button innerText="BTN3" />
        <Button innerText="BTN3" />
      </div>
      <div className="icon-user">
        <img src={UserIcon} alt="icon-user" />
      </div>
    </header>
  );
}

export default Header;