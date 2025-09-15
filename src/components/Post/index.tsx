import { Wrapper } from '@components/Layout';
import { TitleTruncate } from '@components/RecentPosts';
import { Article, Tag } from '@interfaces/common';
import { OPTIONS_FORMAT_DATE } from '@utils/constants';
import Button from '@utils/lib/Button';
import TagComponent from '@utils/lib/Tag';
import Tooltip from '@utils/lib/Tooltip';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillChatFill, BsHeartArrow } from 'react-icons/bs';
import readingTime from 'reading-time';

const Post = ({ article }: { article?: Article }) => {
  const readTime = readingTime(article?.content?.html ?? '' + article?.title + article?.createdAt).minutes;
  return (
    <Wrapper className="flex flex-wrap relative items-stretch p-5 md:p-6 border border-black rounded-xl bg-content dark:bg-[#8dc4d1] mb-5 sm:mb-8">
      <div className="relative w-full sm:w-1/3 border border-black rounded-xl press min-h-[250px] sm:min-h-[unset]">
        <Link href={`/post/${article?.slug}`}>
          <Image
            src={article?.thumbnails?.[0] ?? '/default.jpg'}
            alt="Thumbnail"
            className="absolute rounded-xl"
            fill
            objectFit="cover"
          />
        </Link>
        <Tooltip
          content={`${article?.comments?.length ?? 0} ${(article?.comments?.length ?? 0) > 1 ? 'comments' : 'comment'}`}
          className="absolute top-[-4px] left-0 translate-x-1/2 translate-y-1/2"
        >
          <span className="bg-black rounded-full p-[10px] inline-block">
            <BsFillChatFill color="white" fontSize={'0.8rem'} />
          </span>
        </Tooltip>
      </div>
      <div className="w-full sm:w-2/3 py-4 md:py-6 sm:pl-5 md:pl-8">
        <div className="flex items-center justify-start flex-wrap">
          {article?.tags?.map((tag: Tag, index) => (
            <TagComponent
              key={tag?.id ?? tag?.slug}
              tag={tag}
              className={`press absolute sm:relative top-[36px] right-[36px] sm:top-[unset] sm:right-[unset] sm:mx-1 mb-3 sm:mb-0 ${
                index > 0 ? 'hidden sm:block' : 'ml-0'
              }`}
            />
          ))}
          <div className="flex items-center flex-grow mt-2">
            <span className="text-sm mx-2 inline-block">
              {new Date(article?.createdAt ?? '').toLocaleDateString('en-US', OPTIONS_FORMAT_DATE)}
            </span>
            <span className="bg-primary mx-2 inline-block p-[3px] rounded-full "></span>
            <span className="text-sm mx-2 inline-block">{`${readTime} ${readTime > 1 ? 'mins' : 'min'} read`}</span>
          </div>
        </div>
        <TitleTruncate className="font-title font-bold text-2xl md:text-3xl my-4 md:my-5 link" lineclamp={2}>
          <Link href={`/post/${article?.slug}`}>{article?.title}</Link>
        </TitleTruncate>
        <TitleTruncate className='content-rte' lineclamp={4} dangerouslySetInnerHTML={{ __html: article?.content?.html ?? '' }}></TitleTruncate>
        <div className="mt-6 md:mt-10">
          <Link href={`/post/${article?.slug}`} passHref className="inline-block">
            <Button
              name="Continue Reading"
              className="bg-white dark:bg-[#EAFDFC] border border-black rounded-[20px] py-1 px-4 press font-semibold"
              icon={<BsHeartArrow className="ml-3" />}
            />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Post;
