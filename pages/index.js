import Image from 'next/image';
import VerifyContainer from '../Components/VerifyContainer';
import logoEinstein from '../public/Einstein Floripa horizontal.png';

export default function Home() {
  return (
    <main className='flex flex-col items-center h-screen w-screen p-8 bg-blue-300'>
      <Image src={logoEinstein} alt='logo-einstein' width={270} height={130} />
      <VerifyContainer />
    </main>
  );
}
