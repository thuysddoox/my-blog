import Comments from '@components/Comments';
import { Wrapper } from '@components/Layout';
import { MainLayoutWithNoSSR } from '@components/Layout/Main';
import PostDetail from '@components/PostDetail';
import RelatedPosts from '@components/RelatedPosts';
import { Article } from '@interfaces/common';
import { GET_ARTICLE_DETAIL } from '@services/article';
import { GetServerSideProps } from 'next';
import { client } from '../_app';
import { DEFAULT_DESCRIPTION } from '@utils/constants';
import { useRouter } from 'next/router';

const PostDetailPage = ({ article }: { article: Article }) => {
  const router = useRouter();
  return (
    <MainLayoutWithNoSSR
      pageTitle={article?.title}
      description={article?.title}
      hasOtherOfFooter
      url={process.env.NEXT_PUBLIC_ROOT_URL + router.asPath}
    >
      <Wrapper className="pt-2 pb-6 mx-auto mt-12 sm:mt-0">
        <PostDetail article={article} />
        <Comments articleId={article?.id ?? ''} totalComments={article?.comments?.length ?? 0} />
        <RelatedPosts slugExist={article?.slug ?? ''} slugTag={article?.tags?.[0]?.slug ?? 'react'} />
      </Wrapper>
    </MainLayoutWithNoSSR>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  const slug = params?.slug ?? '';
  try {
    const { data } = await client.query({ query: GET_ARTICLE_DETAIL, variables: { slug } });
    return {
      props: {
        article: data?.article ?? {},
      },
    };
  } catch (error) {
    return {
      props: {
        article: {},
      },
    };
  }
};
export default PostDetailPage;
