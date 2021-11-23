import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = (props) => {
  const { id, name, description, thumbnail, events, comics, series, stories } =
    props.data;
  return (
    <NavLink to={`/s/${id}`}>
      <div className="container mx-auto max-w-sm bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 cursor-pointer ">
            {name}
          </h1>
          <p className="text-lg text-gray-800 font font-thin">{description}</p>
          <ul class="flex flex-row pl-2 text-gray-600 overflow-x-scroll hide-scroll-bar">
            <li class="py-1">
              <div class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                {events.available} events
              </div>
            </li>
            <li class="py-1">
              <div class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                {comics.available} comics
              </div>
            </li>
            <li class="py-1">
              <div class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                {series.available} series
              </div>
            </li>
            <li class="py-1">
              <div class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                {stories.available} stories
              </div>
            </li>
          </ul>
        </div>
      </div>
    </NavLink>
  );
};
