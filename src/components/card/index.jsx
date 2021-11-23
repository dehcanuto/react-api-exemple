import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = (props) => {
  const { id, name, description, thumbnail } = props.data;
  return (
    <NavLink to={`/s/${id}`}>
      <div className="container mx-auto max-w-sm bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 cursor-pointer ">
            {name}
          </h1>
          <p className="text-lg text-gray-800 font font-thin">{description}</p>
        </div>
      </div>
    </NavLink>
  );
};
