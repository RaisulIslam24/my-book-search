'use client';

import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const searchBooks = async (query: string) => {
    setLoading(true);
    setError('');
    setSearched(true);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setBooks(data.docs.slice(0, 20));
    } catch (err) {
      setError('Failed to fetch data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-white px-4 pt-10 pb-20">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 drop-shadow-md mb-6">
        📖 Discover Books Instantly
      </h1>
      <SearchForm onSearch={searchBooks} />
      <div className="mt-6">
        {loading && (
          <div className="text-center animate-pulse text-blue-500 font-semibold">
            Loading books...
          </div>
        )}
        {error && (
          <p className="text-center text-red-500 font-medium">{error}</p>
        )}
        {!loading && searched && books.length === 0 && !error && (
          <p className="text-center text-gray-500 font-medium">
            No results found.
          </p>
        )}
        <BookList books={books} />
      </div>
    </div>
  );
}
