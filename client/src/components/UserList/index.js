import React from "react";
import { QUERY_USERS } from "../../util/queries";
import { useQuery } from "@apollo/client";

const UserList = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="UserList">
      <ul>
        {data?.users &&
          data.users.map(({ username, email }) => (
            <li key={username}>{`${username}, ${email}`}</li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
