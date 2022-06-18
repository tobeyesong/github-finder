/** @format */
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='mt-12 sm:mx-auto sm:max-w-lg sm:flex'>
        <div className='flex-1 min-w-0 shadow-lg'>
          <input
            value={text}
            onChange={handleChange}
            id='search-input'
            className='block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 transition-all transform border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-100 focus:ring-offset-1 focus:ring-offset-green-100'
            placeholder='Search Github Users'
          />
        </div>
        <div className='mt-4 sm:mt-0 sm:ml-3'>
          <button
            type='submit'
            className='block w-full px-5 py-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:px-10'>
            Search
          </button>
        </div>

        {users?.length > 0 && (
          <div className='mt-4 sm:mt-0 sm:ml-3'>
            <button
              onClick={clearUsers}
              type='submit'
              className='block w-full px-5 py-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:px-10'>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default UserSearch;
