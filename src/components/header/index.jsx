import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  return (
    <div className="fixed top-0 left-0 right-0 flex-1 flex flex-col">
      <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
        <ul className="flex items-center">
          <li className="h-6 w-6">
            <img
              className="h-full w-full mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
              alt="svelte logo"
            />
          </li>
        </ul>
        <ul className="flex items-center">
          <li>
            <h1 className="pl-8 lg:pl-0 text-gray-700">{props.title}</h1>
          </li>
        </ul>
        <ul className="flex items-center">
          <li className="pr-6"></li>
          <li className="h-10 w-10">
            <img
              className="h-full w-full rounded-full mx-auto"
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Foto do usuário"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
