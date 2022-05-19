import React, { useContext } from "react";
import { userContext } from "./context/userContext";

const Success = () => {
  const { setSubmitForm } = useContext(userContext);
  return (
    <div id="container">
      <div id="success-box">
        <div className="dot"></div>
        <div className="dot two"></div>
        <div className="face">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth happy"></div>
        </div>
        <div className="shadow scale"></div>
        <div className="message">
          <h1 className="alert">Success!</h1>
          <p>yay, everything is working.</p>
        </div>
        <div>
          <button
            className="button-box"
            onClick={() => setSubmitForm("review")}
          >
            <h1 className="green">Review</h1>
          </button>
          <button
            className="button-box button-box2"
            onClick={() => setSubmitForm("form")}
          >
            <h1 className="green">Go Back</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
