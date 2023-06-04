import { useQuery } from '@apollo/client';
import { Wrapper } from '@components/Layout';
import WrapperContent from '@components/Layout/WrapperContent';
import { Article } from '@interfaces/common';
import { GET_ARTICLES } from '@services/article';
import { OPTIONS_FORMAT_DATE } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'styled-components';
export const TitleTruncate = styled.p<{ lineclamp?: number }>`
  display: -webkit-box;
  -webkit-line-clamp: ${({ lineclamp }) => lineclamp ?? 1};
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
`;
const RecentPosts = ({ className }: { className?: string }) => {
  const { data } = useQuery(GET_ARTICLES, { variables: { first: 3 } });
  return (
    <WrapperContent title="Recent Post" className={className}>
      {data?.articles?.map((article: Article, index: number) => (
        <RecentPost article={article} key={article?.id} num={index + 1} />
      ))}
    </WrapperContent>
  );
};
export const RecentPost = ({
  displayMinRead = false,
  className,
  article,
  num = 1,
}: {
  displayMinRead?: boolean;
  className?: string;
  article: Article;
  num?: number;
}) => {
  return (
    <Wrapper className={`flex  items-stretch p-3 pr-0 ${className}`}>
      <div className="relative w-1/3 border border-black rounded-lg min-h-[60px] sm:min-h-[70px]">
        <Link href={`/post/${article?.slug}`}>
          <Image
            src={article?.thumbnails?.[0] ?? '/default.jpg'}
            alt="Thumbnail"
            className="absolute rounded-lg"
            fill
            objectFit="cover"
          />
          <span
            style={{ background: 'url(/number-decoration.svg)' }}
            className="inline-block absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8"
          >
            <Image src="/number-decoration.svg" alt="Thumbnail" className="absolute" fill objectFit="contain" />
            <span className="font-title font-bold text-lg absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {num}
            </span>
          </span>
        </Link>
      </div>
      <div className="w-2/3 pl-4">
        <Link href={`/post/${article?.slug}`}>
          <TitleTruncate className="font-title font-bold text-base link leading-tight sm:leading-tight" lineclamp={2}>
            {article?.title}
          </TitleTruncate>
        </Link>
        <div className="flex flex-wrap items-center mt-1 text-sm">
          <span>{new Date(article?.createdAt ?? '').toLocaleDateString('en-US', OPTIONS_FORMAT_DATE)}</span>
          {displayMinRead && (
            <div className="flex-grow text-right">
              <span className="bg-primary inline-block p-[3px] rounded-full mx-4"></span>
              <span>1 min read</span>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default RecentPosts;
