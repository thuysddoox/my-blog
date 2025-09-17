import { Wrapper } from '@components/Layout';
import ShareOnSocial from '@components/ShareOnSocial';
import { Article } from '@interfaces/common';
import { OPTIONS_FORMAT_DATE } from '@utils/constants';
import TagComponent from '@utils/lib/Tag';
import parse from 'html-react-parser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import readingTime from 'reading-time';

const PostDetail = ({ article }: { article: Article }) => {
  const router = useRouter();
  const readTime = Math.ceil(readingTime(article?.content?.html ?? '' + article.title + article.createdAt).minutes);
  return (
    <Wrapper>
      <div className="sticky top-[300px] h-[0] left-0 inline-block sm:-translate-x-1/2 -translate-y-1/2 -translate-x-[40%] z-[9]">
        <ShareOnSocial url={process.env.NEXT_PUBLIC_ROOT_URL + router.asPath} />
      </div>
      <div className="border border-black rounded-xl shadow-md bg-content dark:bg-[#8dc4d1] mb-12 p-4 sm:p-8 relative">
        <div className="flex items-stretch flex-wrap">
          <div className="relative w-full md:w-[40%] min-h-[300px] border border-black rounded-xl">
            <Image
              src={article?.thumbnails?.[0] ?? '/default.jpg'}
              alt="Thumbnail"
              className="absolute rounded-xl"
              fill
              objectFit="cover"
            />
          </div>
          <div className="w-full md:w-[60%] md:pl-8 py-4 sm:py-5 lg:py-8">
            <div className="flex flex-wrap items-center justify-between md:block mt-2">
              <div className="flex items-center flex-wrap">
                {article?.tags?.map((tag, id) => (
                  <TagComponent key={tag?.id ?? id} tag={tag} className={`press ${id === 0 ? 'ml-0' : ''}`} />
                ))}
              </div>
              <div className="flex items-center mb-4 mt-3 text-[15px]">
                <span className="mr-4">
                  {new Date(article?.createdAt ?? '').toLocaleDateString('en-US', OPTIONS_FORMAT_DATE)}
                </span>
                <span className="bg-primary inline-block p-[3px] rounded-full mr-4"></span>
                <span className="">{`${readTime} ${readTime > 1 ? 'mins' : 'min'} read`}</span>
              </div>
            </div>
            <h3 className="p-3 sm:p-5 border border-black rounded-lg bg-white dark:bg-[#EAFDFC] font-bold text-2xl sm:text-3xl font-title mt-2 mb-4 sm:my-4">
              {article?.title}
            </h3>
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex items-center my-1 sm:my-2">
                <div className="w-12 h-12 rounded-full relative border border-black">
                  <Image
                    src={`/avatar/avatar${new Date(article?.createdAt ?? '').getDay() + 1}.jpg`}
                    alt="Author"
                    fill
                    className="absolute rounded-full object-cover"
                  />
                </div>
                <span className="font-semibold ml-3 text-[15px]">Dev_Dumb</span>
              </div>
              <p className="my-1 sm:my-2 text-[15px] flex-grow text-right">
                <strong>Last Update: </strong>{' '}
                {new Date(article?.updatedAt ?? '').toLocaleDateString('en-US', OPTIONS_FORMAT_DATE)}
              </p>
            </div>
          </div>
        </div>
        <div className="py-2 sm:p-5 lg:p-8 content-rte">{parse(article?.content?.html ?? '')}</div>
      </div>
    </Wrapper>
  );
};

export default PostDetail;
