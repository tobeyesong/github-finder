/** @format */

import React from "react";
import UserSearch from "../components/users/UserSearch";
import UsersResults from "../components/users/UsersResults";
import Alert from "../components/layout/Alert";

function Home() {
  return (
    <>
      <div className='bg-white'>
        <div className='px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
          <div className='space-y-8 sm:space-y-12'>
            <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
              <Alert />
              <UserSearch />
            </div>
            <ul role='list'>
              <UsersResults />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
