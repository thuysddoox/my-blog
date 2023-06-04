import { Wrapper } from '@components/Layout';
import { Tag } from '@interfaces/common';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Dot = styled.span<{ bgcolor: string }>`
  -webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  transform: rotate(25deg);
  background: ${({ bgcolor }) => bgcolor};
`;

const TagComponent = ({ tag, className }: { tag: Tag; className?: string }) => {
  return (
    <Wrapper
      className={`inline-block py-1 px-3 m-1 text-sm sm:text-[15px] border border-black rounded-[20px] bg-white dark:bg-[#EAFDFC] ${className}`}
    >
      <Link href={`/tag/${tag?.slug}`} passHref className="flex items-center justify-center">
        <Dot bgcolor={tag?.color?.hex} className={`inline-block p-[5px] mr-2 shadow-lg`}></Dot>
        <span>{tag?.name}</span>
      </Link>
    </Wrapper>
  );
};

export default TagComponent;
