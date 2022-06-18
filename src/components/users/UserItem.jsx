/** @format */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <ul role='list'>
      <li>
        <div className='space-y-4'>
          <img
            className='w-20 h-20 mx-auto rounded-full lg:w-24 lg:h-24'
            src={avatar_url}
            alt=''
          />

          <div className='space-y-2'>
            <div className='text-xs font-medium lg:text-lg'>
              <h1>{login}</h1>
            </div>
            <Link to={`/user/${login}`}>
              <div className='py-2 rounded-md text-md bg-sky-600 text-slate-50'>
                Visit Profile
              </div>
            </Link>
          </div>
        </div>
      </li>
    </ul>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
