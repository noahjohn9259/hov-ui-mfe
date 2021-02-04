import React from 'react';
import { Menu } from '@highoutput/ui-core';
import { OutlineIcon } from '@highoutput/icons-outline';
import { Link } from 'react-router-dom';

export default function Header() {
  // const { isSignedIn, onSignOut } = props;
  // const onClick = () => {
  //   if (isSignedIn && onSignOut) {
  //     onSignOut();
  //   }
  // };

  return (
    <div className="relative bg-white">
      <div className="relative z-20 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <a href="#" className="flex">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Menu variant="default">
              <Menu.SubMenu submenuTitle="Company">
                <Menu.Item>About</Menu.Item>
                <Menu.Item>Customers</Menu.Item>
                <Menu.Item>Press</Menu.Item>
                <Menu.Item>Careers</Menu.Item>
                <Menu.Item>Privacy</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu submenuTitle="Resources">
                <Menu.Item leftIcon={<OutlineIcon className="h-5 w-5" type="academic-cap" />}>
                  Community
                </Menu.Item>
                <Menu.Item leftIcon={<OutlineIcon className="h-5 w-5" type="adjustments" />}>
                  Partners
                </Menu.Item>
                <Menu.Item rightIcon={<OutlineIcon className="h-5 w-5" type="annotation" />}>
                  Guides
                </Menu.Item>
                <Menu.Item rightIcon={<OutlineIcon className="h-5 w-5" type="archive" />}>
                  Webinars
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu disabled submenuTitle="Solutions">
                <Menu.Item>Analytics</Menu.Item>
                <Menu.Item>Security</Menu.Item>
              </Menu.SubMenu>
              <Menu.Item disabled>FAQ</Menu.Item>
              <Menu.Item>Contact Us</Menu.Item>
            </Menu>
            <div className="flex items-center md:ml-12">
              <Link
                to="/auth/signin"
                className="text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </Link>
              <Link
                to="/auth/signup"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
