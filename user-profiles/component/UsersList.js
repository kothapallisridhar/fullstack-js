import React from "react";
import HomeStyles from "../styles/Home.module.css";

const UsersList = ({ users }) => {
  return (
    <div>
      <main className={HomeStyles.main}>
        <div className={HomeStyles.grid}>
          {users?.map((user) => (
            <div className={HomeStyles.card}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Company: {user.company.name}</p>
              <a href={`/user/${user.id}`}>Know more</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UsersList;
