import Image from "next/image";

const Header = () => {
  return (
    <div className='flex items-center justify-center'>
      <Image src='/logo.png' width={75} height={75} alt='Data Mirror' />
      <h1 className='text-4xl font-medium'>Data Mirror</h1>
    </div>
  );
};

export default Header;
