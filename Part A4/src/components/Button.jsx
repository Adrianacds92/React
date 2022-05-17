import React from "react";

function Button(props) {
  return <button className={`btn first ${props.className}`}>{props.innerText}</button>;
}

export default Button;