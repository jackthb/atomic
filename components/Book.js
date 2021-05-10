export default function Book({ book }) {
  const { title, author, image } = book;
  return (
    <div className="max-w-lg mx-auto flex rounded border-1 border-t-4 border-b-4 border-yellow-500 p-4">
      <img draggable={false} src={image} className="w-24 h-auto select-none" />
      <div className="flex flex-col px-5">
        <h1 className="text-1xl">Currently reading</h1>
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className=""> by {author}</span>
      </div>
    </div>
  );
}
