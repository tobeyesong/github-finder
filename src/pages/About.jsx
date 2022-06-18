/** @format */

import React from "react";

const navigation = {
  social: [
    {
      name: "GitHub",
      href: "https://github.com/tobeyesong/gtihub-finder",
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
};

function About() {
  return (
    <div className='relative py-16 bg-white sm:py-24'>
      <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
        <div className='relative sm:py-16 lg:py-0'>
          <div
            aria-hidden='true'
            className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'>
            <div className='absolute inset-y-0 w-full bg-slate-100 right-1/2 rounded-r-3xl lg:right-72' />

            <img
              src='https://media.publit.io/file/noun-rounded-square-331246-71D358.png'
              className='absolute -ml-3 top-8 left-1/2 lg:-right-52 lg:left-auto lg:-top-32'
              alt=''
            />

            <svg width={404} height={392} fill='none' viewBox='0 0 404 392'>
              <defs>
                <pattern
                  id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'>
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
              />
            </svg>
          </div>
          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
            <div className='relative pb-10 overflow-hidden shadow-xl pt-72 rounded-2xl'>
              <img
                className='absolute inset-0 object-cover w-full h-full'
                src='https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
              <div className='absolute inset-0 bg-green-500 mix-blend-multiply' />
              <div className='absolute inset-0 opacity-50 bg-gradient-to-t from-indigo-500 via-indigo-600' />
            </div>
          </div>
        </div>

        <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
          {/* Content area */}

          <div className='relative overflow-hidden -10 pt-72 '>
            <h2 className='text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl'>
              Github Finder
            </h2>
            <div className='mt-6 space-y-2 text-gray-500'>
              <p className='text-lg'>
                Made with the Github API. Styled by TailwindCSS. Powered by
                React.
              </p>
              <p className='leading'>
                A web app made to search Github profiles and display their stats
                and repos.
              </p>{" "}
              <div className='flex justify-center mt-8 space-x-6'>
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-gray-900 transition-all transform hover:text-gray-500'>
                    <span className='sr-only'>{item.name}</span>
                    <item.icon className='w-10 h-10' aria-hidden='true' />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
