import { MainLayoutWithNoSSR } from '@components/Layout/Main';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <MainLayoutWithNoSSR pageTitle="Not Found Page">
      <div className="text-center mt-32 sm:my-24 dark:text-[#EAFDFC]">
        <h2
          className="font-extrabold text-4xl sm:text-6xl font-title text-white"
          style={{ textShadow: '1px -2px 2px black' }}
        >
          404
        </h2>
        <h2
          className="font-extrabold text-4xl sm:text-6xl my-3 sm:my-5 font-title text-white"
          style={{ textShadow: '1px -2px 2px black' }}
        >
          Page not found
        </h2>
        <p className="font-bold text-xl sm:text-2xl mt-8 sm:mt-12">Something's wrong here...</p>
        <p className="my-4 sm:my-6 text-base sm:text-lg">We can't find the page you're looking.</p>
        <Link
          href={'/'}
          className="mt-6 inline-block border border-black bg-primary text-white rounded-[30px] py-2 px-8 text-lg font-bold press shadow-md"
        >
          Go back to home
        </Link>
      </div>
    </MainLayoutWithNoSSR>
  );
};

export default NotFoundPage;
