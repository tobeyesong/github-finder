/** @format */

import React from "react";
import { Link } from "react-router-dom";

const navigation = {
  main: [{ name: "Portfolio", href: "https://toancode.com/" }],
};

function Footer() {
  return (
    <footer className='bg-slate-900'>
      <div className='px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex flex-wrap justify-center -mx-5 -my-2'>
          <Link
            to='/'
            className='pb-4 text-lg font-thin align-middle text-slate-100'>
            <img
              src='https://media.publit.io/file/noun-pattern-4737951-24EE7F.png'
              alt=''
              className='flex items-center flex-shrink-0 w-14 h-14'
            />
          </Link>
        </div>
        <nav
          className='flex flex-wrap justify-center -mx-5 -my-2'
          aria-label='Footer'>
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <a
                href={item.href}
                className='px-2 pt-2 pb-3 text-base text-gray-100 uppercase transition-all transform rounded-md bg-emerald-600 hover:text-emerald-900'>
                {item.name}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
