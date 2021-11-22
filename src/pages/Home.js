import React, { useState, useEffect } from 'react';

import { Header } from '../components/header';
import { Card } from '../components/card';

import { listHeros } from '../lib/hero';

export default function HomePage() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      console.log('foi 2');
      setHeroes(await listHeros());
      setLoading(false);
      console.log('heroes', heroes);
    }
    init();
  }, [heroes]);

  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <Header title="Home" />
      <Card />
    </div>
  );
}
