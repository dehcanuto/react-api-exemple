import React, { useState, useEffect } from 'react';

import { Header } from '../components/header';
import { Card } from '../components/card';

import { listHeros } from '../lib/hero';

export default function HomePage() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      setHeroes(await listHeros());
      setLoading(false);
      console.log('heroes', heroes);
    }
    init();
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <Header title="Home" />
      {!loading ? (
        heroes.results.map((item) => {
          return <Card data={item} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
