/** @format */

import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

function RepoList({ repos }) {
  return (
    <div className='rounded-lg '>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <h2 className='p-4 my-4 text-3xl font-normal '>Latest Repositories</h2>
        {repos?.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
