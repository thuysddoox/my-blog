import FollowMe from '@components/FollowMe';
import { Wrapper } from '@components/Layout';
import RecentPosts from '@components/RecentPosts';
import TagClound from '@components/TagCloud';
import Link from 'next/link';

const OtherOfFooter = ({ className }: { className?: string }) => {
  return (
    <Wrapper className={`bg-content dark:bg-[#8dc4d1] ${className}`}>
      <Wrapper className="container flex flex-wrap border-b border-black">
        <div className="w-full sm:w-1/2 px-0 sm:pr-4 lg:px-6 lg:w-1/4 p-5 pb-12 pt-12">
          <Link href={'/'} passHref>
            <h2 className="font-title font-bold text-4xl">dev_dumb</h2>
          </Link>
          <p className="mt-4 text-sm">
            Hello! I'm Sam, welcome to my blog!
          </p>
        </div>
        <RecentPosts className="w-full sm:w-1/2 px-0 lg:px-6 lg:w-1/4 border-0 shadow-none pt-10 sm:pt-12 mb-8 sm:mb-14" />
        <TagClound className="w-full sm:w-1/2 px-0 sm:pl-0 sm:pr-4 lg:px-6 lg:w-1/4 border-0 shadow-none pt-10 sm:pt-12 mb-8 sm:mb-14" />
        <FollowMe className="w-full sm:w-1/2 px-0 lg:px-6 lg:w-1/4 border-0 shadow-none pt-10 sm:pt-12 mb-8 sm:mb-14" />
      </Wrapper>
    </Wrapper>
  );
};

export default OtherOfFooter;
