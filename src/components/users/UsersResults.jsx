/** @format */

import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UsersResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className='grid grid-cols-2 mx-auto gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'>
        {users?.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <div className='flex justify-center'>
        <Spinner />
      </div>
    );
  }
}

export default UsersResults;
