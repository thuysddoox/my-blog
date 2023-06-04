import { MainLayoutWithNoSSR } from '@components/Layout/Main';
import { Wrapper } from '@components/Layout';
import Post from '@components/Post';
import SearchBox from '@components/SearchBox';
import Pagination from '@utils/lib/Pagination';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { SEARCH_ARTICLES } from '@services/article';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Article } from '@interfaces/common';
import { DEFAULT_DESCRIPTION, PARAMS_DEFAULT } from '@utils/constants';
import { scrollToTop } from '@utils/helpers/scrollToTop';

const SearchPage = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: dataTotal, refetch: refetchTotal } = useQuery(SEARCH_ARTICLES, {
    variables: { key: router?.query?.key },
    notifyOnNetworkStatusChange: true,
  });
  const { data, refetch, loading } = useQuery(SEARCH_ARTICLES, {
    variables: { key: router?.query?.key, first: PARAMS_DEFAULT.pageSize, skip: 0 },
    notifyOnNetworkStatusChange: true,
  });
  useEffect(() => {
    setCurrentPage(1);
    refetchTotal({
      key: router?.query?.key,
    });
    refetch({
      key: router?.query?.key,
    });
  }, [router?.query?.key]);

  useEffect(() => {
    refetch({
      skip: (currentPage - 1) * PARAMS_DEFAULT.pageSize,
    });
    scrollToTop();
  }, [currentPage]);
  return (
    <MainLayoutWithNoSSR
      classFooter="block"
      pageTitle="Search Results"
      description={router?.query?.key?.toString() ?? ''}
      url={process.env.NEXT_PUBLIC_ROOT_URL + router.asPath}
    >
      <div className="mt-24 sm:mt-12 mb-8">
        <SearchBox />
      </div>
      <Wrapper className="mb-16">
        {loading ? (
          <div className="flex justify-center h-full">
            <span className="loader1 my-20"></span>
          </div>
        ) : (
          <>
            <Wrapper className="mb-16">
              {data?.articles?.map((article: Article, id: number) => (
                <Post key={article?.id ?? article?.slug} article={article} />
              ))}
            </Wrapper>
            {Math.ceil(dataTotal?.articles?.length / PARAMS_DEFAULT.pageSize) > 1 && (
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPage={Math.ceil(dataTotal?.articles?.length / PARAMS_DEFAULT.pageSize)}
              />
            )}
          </>
        )}
      </Wrapper>
    </MainLayoutWithNoSSR>
  );
};

export default SearchPage;
