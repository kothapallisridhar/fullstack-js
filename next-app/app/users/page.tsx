import Link from "next/link";
import React from "react";

const UsersPage = () => {
  return (
    <>
      <div>UsersPage</div>
      <Link href="/users/new">New User</Link>
    </>
  );
};

export default UsersPage;
