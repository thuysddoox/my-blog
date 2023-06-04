import { Wrapper } from '@components/Layout';
import { Comment } from '@interfaces/common';
import { OPTIONS_FORMAT_DATE } from '@utils/constants';
import Button from '@utils/lib/Button';
import Image from 'next/image';

const CommentPost = ({ comment }: { comment: Comment }) => {
  return (
    <Wrapper className="flex mb-4">
      <div className="relative w-[50px] h-[50px] border border-black rounded-full">
        <Image src="/avatar-default.png" alt="Avatar" className="absolute rounded-full" fill objectFit="cover" />
      </div>
      <div className="pl-3 sm:pl-4 text-[15px] sm:text-base">
        <p className="">
          <strong className="font-title">{comment?.name}</strong> on{' '}
          {new Date(comment?.createdAt ?? '').toLocaleDateString('en-US', OPTIONS_FORMAT_DATE)}
        </p>
        <p className="mt-1">{comment?.content}</p>
      </div>
    </Wrapper>
  );
};

export default CommentPost;
