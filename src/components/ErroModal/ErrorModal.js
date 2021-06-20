import React from "react";

const ErrorModal = ({ title, message, errClick }) => {
  return (
    <div className="backdrop" onClick={errClick}>
      <div className="usererrdetail">
        <header className="header">
          <h2>{title}</h2>
        </header>
        <div className="content">
          <p>{message}</p>
        </div>
        <footer classname="actions">
          <button type="button" onClick={errClick}>
            OK
          </button>
        </footer>
      </div>
    </div>
  );
};
export default ErrorModal;
