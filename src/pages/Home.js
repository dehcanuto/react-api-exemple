import React from 'react';

import { Header } from '../components/header';
import { Card } from '../components/card';

export default function HomePage() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <Header title="Home" />
      <Card />
    </div>
  );
}
