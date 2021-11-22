import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../components/header';

export default function SinglePage() {
  const { slug } = useParams();
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <Header title={slug} />
      <h1>Single: {slug}</h1>
    </div>
  );
}
