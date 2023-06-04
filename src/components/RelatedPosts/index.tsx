import { useQuery } from '@apollo/client';
import WrapperContent from '@components/Layout/WrapperContent';
import { RecentPost } from '@components/RecentPosts';
import { Article } from '@interfaces/common';
import { GET_ARTICLES_BY_TAG } from '@services/article';

const RelatedPosts = ({ slugTag, slugExist }: { slugTag: string; slugExist: string }) => {
  const { data } = useQuery(GET_ARTICLES_BY_TAG, { variables: { slugTag: slugTag, slugExist: slugExist, first: 4 } });
  return (
    <WrapperContent title="Related Articles" className="px-4">
      <div className="flex flex-wrap">
        {data?.articles?.length > 0 ? (
          data?.articles?.map((article: Article) => (
            <RecentPost key={article?.id} article={article} className="w-full sm:w-1/2" displayMinRead={true} />
          ))
        ) : (
          <em className="w-full font-medium text-center">Not found other posts.</em>
        )}
      </div>
    </WrapperContent>
  );
};

export default RelatedPosts;
