/** @format */
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

import PropTypes from "prop-types";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className='pt-12 rounded-t-lg bg-emerald-500 sm:pt-16'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-thin text-gray-100 sm:text-4xl'>
            <a href={html_url}>
              <FaLink className='inline mr-1 ' /> {name}
            </a>
          </h2>
          <p className='mt-3 text-xl text-gray-900 sm:mt-4'>{description}</p>
        </div>
      </div>
      <div className='pb-12 mt-10 bg-white sm:pb-16'>
        <div className='relative'>
          <div className='absolute inset-0 rounded-b-lg bg-emerald-500 h-1/2' />
          <div className='relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
              <dl className='rounded-lg shadow-lg bg-slate-50 sm:grid sm:grid-cols-4'>
                <div className='flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r'>
                  <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                    <FaEye className='mr-2 text-blue-500' />
                  </dt>
                  <dd className='order-1 text-5xl font-normal text-amber-700'>
                    {watchers_count}
                  </dd>
                </div>
                <div className='flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r'>
                  <dt className='order-2 mt-2 text-lg leading-6 text-gray-500 '>
                    <FaStar className='mr-2 text-yellow-400 ' />
                  </dt>
                  <dd className='order-1 text-5xl font-normal text-amber-700'>
                    {stargazers_count}
                  </dd>
                </div>
                <div className='flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l'>
                  <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                    <FaInfo className='mr-2 text-green-400' />
                  </dt>
                  <dd className='order-1 text-5xl font-normal text-amber-700'>
                    {open_issues}
                  </dd>
                </div>
                <div className='flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l'>
                  <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                    <img
                      className='w-5 h-5'
                      src='https://media.publit.io/file/tplport/noun-pull-request-1468353.svg'
                      alt=''
                    />
                  </dt>
                  <dd className='order-1 text-5xl font-normal text-amber-700'>
                    {forks}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
