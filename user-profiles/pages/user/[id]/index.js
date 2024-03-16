import React from "react";
import HomeStyles from "../../../styles/Home.module.css";

const index = ({ user }) => {
  return (
    <div>
      <main className={HomeStyles.main}>
        {user && (
          <div className={HomeStyles.card}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>
              Address: {user.address.street} {user.address.city}{" "}
              {user.address.zipcode}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await res.json();

  return {
    props: { user },
  };
}
export default index;
