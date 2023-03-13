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
    }
    init();
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <Header title="Home" />
      <div className="max-w-5xl mx-auto mt-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {!loading ? (
            heroes.results.map((item, index) => {
              return <Card data={item} key={index} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
