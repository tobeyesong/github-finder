/** @format */

import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import Spinner from "../components/layout/Spinner";
import RepoList from "../components/repos/RepoList";

function User() {
  const { getUser, user, loading, getUserRepos, repos } =
    useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    type,
  } = user;

  // TODO: add a back to search button

  if (loading) {
    return (
      <div className='mt-12 sm:mx-auto sm:max-w-lg '>
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className='lg:justify-center lg:flex'>
          {" "}
          <Spinner />
        </div>
      </div>
    );
  } else {
    return (
      <div className=''>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8'>
          <Link to='/'>
            <button
              type='button'
              className='items-center px-2.5 m-2 py-1.5  text-md font-medium rounded shadow-md text-white bg-blue-600 hover:bg-blue-700'>
              Back To Search
            </button>
          </Link>
        </div>

        <div className='pt-16 bg-white lg:py-24'>
          <div className='pb-16 rounded-md bg-emerald-600 lg:pb-0 lg:z-10 lg:relative'>
            <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8'>
              <div className='relative lg:-my-8'>
                <div
                  aria-hidden='true'
                  className='absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden'
                />

                <div className='max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full'>
                  <div className='overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-t-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full'>
                    <img
                      src={avatar_url}
                      alt=''
                      className='object-cover lg:h-full lg:w-full'
                    />
                  </div>
                  <div className='flex justify-between p-2 shadow-lg bg-slate-100 rounded-b-md'>
                    <div className='inline-flex rounded-md '>
                      <a
                        href={html_url}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white transition-all transform bg-green-600 border border-transparent rounded-md sm:text-sm hover:bg-green-700'>
                        Github Profile
                      </a>
                    </div>

                    {blog ? (
                      <div className='inline-flex rounded-md '>
                        <a
                          href={blog}
                          target='_blank'
                          rel=' noreferrer"'
                          className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white transition-all transform bg-green-600 border border-transparent rounded-md sm:text-sm hover:bg-green-700'>
                          Visit Website
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className='mt-12 lg:m-0 lg:col-span-2 lg:pl-8'>
                <div className='max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none'>
                  <blockquote>
                    <div>
                      <svg
                        className='w-12 h-12 text-white opacity-25'
                        fill='currentColor'
                        viewBox='0 0 32 32'
                        aria-hidden='true'>
                        <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                      </svg>
                      <p className='mt-6 text-2xl font-medium text-white'>
                        {bio}
                      </p>
                    </div>
                    <footer className='mt-6'>
                      <p className='text-base font-medium text-white'>{name}</p>
                      <div className='text-base font-medium text-indigo-100'>
                        <span className='inline-flex items-center px-3 py-0.5 m-1 rounded-full text-sm font-medium bg-slate-500 text-white'>
                          <svg
                            className='-ml-1 mr-1.5 h-2 w-2 text-blue-400'
                            fill='currentColor'
                            viewBox='0 0 8 8'>
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          <div className='text-white'> {type}</div>
                        </span>

                        {hireable ? (
                          <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-slate-600 text-white'>
                            <svg
                              className='-ml-1 mr-1.5 h-2 w-2 text-blue-400'
                              fill='currentColor'
                              viewBox='0 0 8 8'>
                              <circle cx={4} cy={4} r={3} />
                            </svg>{" "}
                            <p>
                              <div className='text-green-400'>Hireable</div>
                            </p>
                          </span>
                        ) : (
                          <div className='hidden'> N/A</div>
                        )}

                        {location ? (
                          <span className='inline-flex items-center px-3 py-0.5 m-1 rounded-full text-sm font-medium bg-slate-900 text-white'>
                            <svg
                              className='-ml-1 mr-1.5 h-2 w-2 text-teal-400 animate-pulse'
                              fill='currentColor'
                              viewBox='0 0 8 8'>
                              <circle cx={4} cy={4} r={3} />
                            </svg>
                            <div className='text-white'> {location}</div>
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-md px-4 mx-auto sm:max-w-5xl sm:px-6 lg:p-0 lg:h-full'>
          <div>
            <dl className='grid grid-cols-1 gap-5 mt-5 sm:grid-cols-4'>
              <div className='px-4 py-5 overflow-hidden bg-white rounded-lg shadow-lg sm:p-6'>
                <dt className='text-sm font-medium text-gray-500 truncate'>
                  Followers
                </dt>
                <dd className='flex mt-1 text-3xl font-semibold text-gray-900'>
                  <img
                    className='w-10 h-10'
                    src='https://media.publit.io/file/githubFinder/noun-address-book-2342150-71D358.png'
                    alt=''
                  />

                  {followers && (
                    <div className=''>{numberWithCommas(followers)}</div>
                  )}
                </dd>
              </div>
              <div className='px-4 py-5 overflow-hidden bg-white rounded-lg shadow-lg sm:p-6'>
                <dt className='text-sm font-medium text-gray-500 truncate'>
                  Following
                </dt>
                <dd className='flex mt-1 text-3xl font-semibold text-gray-900'>
                  <img
                    className='w-10 h-10'
                    src='https://media.publit.io/file/githubFinder/noun-add-user-2049112-71D358.png'
                    alt=''
                  />
                  {following}
                </dd>
              </div>
              <div className='px-4 py-5 overflow-hidden bg-white rounded-lg shadow-lg sm:p-6'>
                <dt className='text-sm font-medium text-gray-500 truncate'>
                  Repos
                </dt>
                <dd className='flex mt-1 text-3xl font-semibold text-gray-900'>
                  <img
                    className='w-10 h-10'
                    src='https://media.publit.io/file/githubFinder/noun-pattern-2549168-71D358.png'
                    alt=''
                  />
                  {public_repos}
                </dd>
              </div>
              <div className='px-4 py-5 overflow-hidden bg-white rounded-lg shadow-lg sm:p-6'>
                <dt className='text-sm font-medium text-gray-500 truncate'>
                  Gists
                </dt>
                <dd className='flex mt-1 text-3xl font-semibold text-gray-900'>
                  <img
                    className='w-10 h-10'
                    src='https://media.publit.io/file/githubFinder/noun-gist-3102372-71D358.png'
                    alt=''
                  />
                  {public_gists}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    );
  }
}

export default User;
