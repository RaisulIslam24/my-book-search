'use client';

import { useState } from 'react';

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchForm({ onSearch }: Props) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 justify-center">
      <input
        className="border px-4 py-2 w-80 rounded"
        type="text"
        value={query}
        placeholder="Search books by title, author..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Search
      </button>
    </form>
  );
}