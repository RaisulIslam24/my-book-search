type Props = {
  books: any[];
};

export default function BookList({ books }: Props) {
  if (!books.length) return null;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {books.map((book, idx) => (
        <li key={idx} className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Title: {book.title}</h2>
          <p className="text-sm text-gray-700">
            Author: {book.author_name?.join(', ') || 'Unknown Author'}
          </p>
        </li>
      ))}
    </ul>
  );
}