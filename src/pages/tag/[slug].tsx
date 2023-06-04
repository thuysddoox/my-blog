import { useQuery } from '@apollo/client';
import AboutMe from '@components/AboutMe';
import FollowMe from '@components/FollowMe';
import { MainLayoutWithNoSSR } from '@components/Layout/Main';
import { Wrapper } from '@components/Layout';
import Post from '@components/Post';
import RecentPosts from '@components/RecentPosts';
import TagClound from '@components/TagCloud';
import TagSummary from '@components/TagSummary';
import { Article, Tag } from '@interfaces/common';
import { GET_TAG_DETAIL } from '@services/tag';
import Pagination from '@utils/lib/Pagination';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { client } from '../_app';
import { scrollToTop } from '@utils/helpers/scrollToTop';
import { DEFAULT_DESCRIPTION, PARAMS_DEFAULT } from '@utils/constants';
import { GET_ARTICLES_BY_TAG } from '@services/article';
import { useRouter } from 'next/router';

const TagPage = ({ tag, totalPage = 1 }: { tag: Tag; totalPage: number }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, refetch, loading } = useQuery(GET_ARTICLES_BY_TAG, {
    variables: { slugTag: tag?.slug ?? 'react', first: PARAMS_DEFAULT.pageSize, skip: 0 },
    notifyOnNetworkStatusChange: true,
  });
  useEffect(() => {
    refetch({
      slugTag: tag?.slug ?? 'react',
      first: PARAMS_DEFAULT.pageSize,
      skip: (currentPage - 1) * PARAMS_DEFAULT.pageSize,
    });
    scrollToTop();
  }, [currentPage]);
  return (
    <MainLayoutWithNoSSR
      classFooter="block lg:hidden"
      description={tag?.summary ?? tag?.name}
      pageTitle={tag?.name}
      url={process.env.NEXT_PUBLIC_ROOT_URL + router.asPath}
    >
      <TagSummary className="mt-24 sm:mt-20" tag={tag} />
      <Wrapper className="flex flex-wrap sm:pt-8">
        <Wrapper className="w-full lg:w-3/4 lg:pr-10 pb-14">
          {loading ? (
            <div className="flex justify-center h-full">
              <span className="loader1 my-20"></span>
            </div>
          ) : (
            <>
              <Wrapper className="pb-6">
                {data?.articles?.map((article: Article, index: number) => (
                  <Post key={article?.id ?? index} article={article} />
                ))}
              </Wrapper>
              {totalPage > 1 && (
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
              )}
            </>
          )}
        </Wrapper>
        <Wrapper className="lg:w-1/4 hidden lg:block">
          <AboutMe />
          <RecentPosts />
          <FollowMe />
          <TagClound />
        </Wrapper>
      </Wrapper>
    </MainLayoutWithNoSSR>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  const slug = params?.slug ?? 'react';
  try {
    const { data } = await client.query({ query: GET_TAG_DETAIL, variables: { slug } });
    return {
      props: { tag: data?.tag ?? {}, totalPage: Math.ceil(data?.tag?.articles?.length / PARAMS_DEFAULT.pageSize) },
    };
  } catch (error) {
    return {
      props: {
        tag: {},
        totalPage: 0,
      },
    };
  }
};
export default TagPage;
