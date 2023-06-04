import { useQuery } from '@apollo/client';
import WrapperContent from '@components/Layout/WrapperContent';
import { Tag } from '@interfaces/common';
import { GET_TAGS } from '@services/tag';
import TagComponent from '@utils/lib/Tag';

const TagClound = ({ tags, className }: { tags?: Tag[]; className?: string }) => {
  const { data } = useQuery(GET_TAGS);
  return (
    <WrapperContent title="Tag Cloud" className={`flex flex-wrap justify-start ${className}`}>
      {data?.tags?.map((tag: Tag) => (
        <TagComponent tag={tag} key={tag?.id} className="my-2 mr-2 press" />
      ))}
    </WrapperContent>
  );
};

export default TagClound;
