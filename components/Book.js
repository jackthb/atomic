import React, { useEffect } from 'react';

export default function Book({ title, author }) {
  return (
    <h1 className='text-2xl font-bold mx-12 rounded border-1 border-t-4 border-b-4 border- border-yellow-500 p-4'>
      I am currently reading {title} by {author}!
    </h1>
  );
}
