import React, { useState } from "react";
import ErrorModal from "../ErroModal/ErrorModal";

const User = ({ userHandler }) => {
  const [uname, setUname] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const usernameHandler = e => {
    console.log(e.target.name);
    setUname(e.target.value);
  };

  const ageHandler = e => {
    setAge(e.target.value);
  };
  const onUserHandler = e => {
    e.preventDefault();
    if (uname.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter the name and age."
      });
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter the valid age."
      });
    } else {
      console.log(e.target.name);
      userHandler(uname, age);
      setUname("");
      setAge("");
    }
  };
  const errorHandler = e => {
    setError(null);
    setUname("");
    setAge("");
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errClick={errorHandler}
        />
      )}
      <div className="card d-flex mt-4  pl-20px usercard mr-20">
        <div className="card-body justify-content-center ml-20">
          <form onSubmit={onUserHandler}>
            <div className="form-group">
              <label htmlfor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={uname}
                onChange={usernameHandler}
              />
            </div>

            <div className="form-group">
              <label htmlfor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={age}
                onChange={ageHandler}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
