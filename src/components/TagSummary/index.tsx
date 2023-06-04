import TagComponent from '@utils/lib/Tag';
import { Wrapper } from '../Layout';
import { Tag } from '@interfaces/common';
const TagSummary = ({ tag, className }: { className?: string; tag: Tag }) => {
  return (
    <Wrapper
      className={`bg-content dark:bg-[#8dc4d1] p-8 rounded-md shadow-md text-center flex items-center justify-center mb-8 md:min-w-[500px] w-full md:w-[80%] mx-auto flex-wrap border border-black ${className}`}
    >
      <div className="px-5 md:px-6 w-full sm:w-[40%]">
        <h3 className="font-title font-bold text-lg">Category: </h3>
        <TagComponent tag={tag} className="my-2 text-[15px]" />
        <div className="flex items-center justify-center flex-wrap my-1">
          <span className="text-sm sm:text-base">{tag?.articles?.length ?? 0}</span>
          <span className="bg-primary inline-block p-[3px] rounded-full mx-4"></span>
          <span className="text-sm sm:text-base">Posts</span>
        </div>
      </div>
      <p className="w-full sm:w-[60%] md:pr-8 pt-4 sm:pt-0">
        {tag?.summary ?? `Some my knowleged about ${tag?.name}. These articles are just only from `}
      </p>
    </Wrapper>
  );
};

export default TagSummary;
