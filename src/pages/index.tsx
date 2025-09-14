import { useQuery } from '@apollo/client';
import AboutMe from '@components/AboutMe';
import FollowMe from '@components/FollowMe';
import { Wrapper } from '@components/Layout';
import { MainLayoutWithNoSSR } from '@components/Layout/Main';
import Post from '@components/Post';
import RecentPosts from '@components/RecentPosts';
import TagClound from '@components/TagCloud';
import { Article } from '@interfaces/common';
import { GET_ARTICLES } from '@services/article';
import { DEFAULT_DESCRIPTION, PARAMS_DEFAULT } from '@utils/constants';
import { scrollToTop } from '@utils/helpers/scrollToTop';
import Pagination from '@utils/lib/Pagination';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { client } from './_app';

export default function Home({ totalPage = 1 }: { totalPage: number }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, loading, refetch } = useQuery(GET_ARTICLES, {
    variables: { skip: 0, first: PARAMS_DEFAULT.pageSize },
    notifyOnNetworkStatusChange: true,
  });
  useEffect(() => {
    refetch({ first: PARAMS_DEFAULT.pageSize, skip: (currentPage - 1) * PARAMS_DEFAULT.pageSize });
    scrollToTop();
  }, [currentPage]);
  return (
    <MainLayoutWithNoSSR
      pageTitle="Blog"
      description={'Home page of website'}
      classFooter="block lg:hidden"
      url={process.env.NEXT_PUBLIC_ROOT_URL}
    >
      <Wrapper className="flex flex-wrap pt-24 sm:pt-20">
        <Wrapper className="w-full lg:w-3/4 lg:pr-10 pb-14">
          {loading ? (
            <div className="flex justify-center h-full">
              <span className="loader1 my-20"></span>
            </div>
          ) : (
            <>
              <Wrapper className="pb-6">
                {data?.articles?.length > 0 ? data?.articles?.map((article: Article) => (
                  <Post article={article} key={article?.id} />
                )) : 
                  <em className="w-full font-bold text-xl sm:text-2xl mt-8 sm:mt-12 text-center w-full inline-block text-black dark:text-white">Articles under construction!</em>
                
                }
              </Wrapper>
              {totalPage > 1 && (
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
              )}{' '}
            </>
          )}
        </Wrapper>

        <Wrapper className="lg:w-1/4 hidden lg:block">
          <AboutMe className="" />
          <RecentPosts className="" />
          <FollowMe className="" />
          <TagClound />
        </Wrapper>
      </Wrapper>
    </MainLayoutWithNoSSR>
  );
}

export const getStaticProps: GetStaticProps<{
  totalPage: number;
}> = async () => {
  try {
    const { data } = await client.query({ query: GET_ARTICLES });
    return {
      props: {
        totalPage: Math.ceil((data?.articles?.length ?? 0) / PARAMS_DEFAULT.pageSize),
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        totalPage: 0,
      },
    };
  }
};
