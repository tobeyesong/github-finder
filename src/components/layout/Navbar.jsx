/** @format */

import React from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Disclosure } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";

const navigation = [{ name: "About", to: "/about", current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar({ title }) {
  return (
    <div>
      <Disclosure as='nav' className='bg-gray-800'>
        {({ open }) => (
          <>
            <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <HiX className='block w-6 h-6' aria-hidden='true' />
                    ) : (
                      <HiMenu className='block w-6 h-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
                  <div>
                    <Link
                      to='/'
                      className='text-lg font-thin align-middle text-slate-100'>
                      <img
                        src='https://media.publit.io/file/noun-pattern-4737951-24EE7F.png'
                        alt=''
                        className='flex items-center flex-shrink-0 w-10 h-10'
                      />
                      {title}
                    </Link>
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <div className='hidden sm:block sm:ml-6'>
                    <div className='flex space-x-4'>
                      <Link to='/about' className='text-white uppercase'>
                        About
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-slate-200 text-white"
                        : "text-gray-300 hover:bg-slate-300 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-normal uppercase"
                    )}
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

Navbar.defaultProps = {
  title: "",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
