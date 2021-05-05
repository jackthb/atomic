import React, { useEffect } from 'react';

export default function Book({ props }) {
  const { data, error } = useSWR(
    'https://get-current-book-goodreads.herokuapp.com/api/getcurrentbook',
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <h1 className='text-2xl font-bold w-80 mx-12 rounded border-1 border-t-4 border-b-4 border- border-yellow-500 p-4'>
      I am currently reading {data.title}!
    </h1>
  );
}
