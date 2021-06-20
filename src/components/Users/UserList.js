import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <ul className="userdetail mt-3 list-decoration-none">
        {users.map((user, key) => {
          return (
            <li key={key}>
              {user.name}({user.age} years old)
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
