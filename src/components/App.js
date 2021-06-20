import React, { useState } from "react";

import Header from "./Header/Header";
import User from "./Users/User";
import UserList from "./Users/UserList";
function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    console.log(uName);

    setUserList(prevUser => {
      return [{ name: uName, age: uAge }, ...prevUser];
    });

    console.log("userList", userList);
  };
  return (
    <div className="App">
      <Header />
      <User userHandler={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
