import Image from 'next/image';

const cloundinary_id = 'du2zxsy39';

const ImageComponent = ({ src, loading = 'lazy' }) => {
  const hostUrl = `https://res.cloudinary.com/${cloundinary_id}/image/upload/`;

  return (
    <Image
      class='w-full h-full'
      src={`${hostUrl}/portfolio/${src}`}
      alt='Picture of the author'
      unsized
      layout='responsive'
      quality={10}
      loading={loading}
    />
  );
};

export default ImageComponent;
