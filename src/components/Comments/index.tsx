import { useMutation, useQuery } from '@apollo/client';
import CommentPost from '@components/CommentPost';
import WrapperContent from '@components/Layout/WrapperContent';
import { Comment } from '@interfaces/common';
import { PUBLISH_ARTICLE } from '@services/article';
import { GET_COMMENTS, POST_COMMENT, PUBLISH_COMMENT } from '@services/comment';
import { PARAMS_DEFAULT } from '@utils/constants';
import { MessageContext } from '@utils/contexts/messageContext';
import { useForm } from '@utils/hooks/useForm';
import Button from '@utils/lib/Button';
import Input from '@utils/lib/Input';
import React, { useContext, useEffect, useState } from 'react';
const initialFormValues = {
  name: '',
  email: '',
  content: '',
};
const Comments = ({
  className,
  articleId,
  totalComments,
}: {
  className?: string;
  articleId: string;
  totalComments: number;
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(Math.ceil(totalComments / PARAMS_DEFAULT.pageSize));
  const { onChange, values, errors, handleSubmit, reset } = useForm(initialFormValues, {});
  const { data, loading, refetch } = useQuery(GET_COMMENTS, {
    variables: { id: articleId, first: PARAMS_DEFAULT.pageSize },
    notifyOnNetworkStatusChange: true,
  });
  const [createComment, { loading: postLoading }] = useMutation(POST_COMMENT);
  const [publishComment, { loading: publishLoading }] = useMutation(PUBLISH_COMMENT);
  const [publishArticle, { loading: articleLoading }] = useMutation(PUBLISH_ARTICLE);
  const { alert } = useContext(MessageContext);
  const postComment = async () => {
    try {
      const { data } = await createComment({ variables: { ...values, articleId } });
      if (data?.createComment?.id) {
        const response = await publishComment({ variables: { id: data.createComment.id } });
        const responseArt = await publishArticle({ variables: { id: articleId } });
        setTotalPage(Math.ceil(responseArt?.data?.comments?.length / PARAMS_DEFAULT.pageSize));
        if (response?.data) alert?.({ content: 'Added Comment successfully!', status: 'success' });
        reset();
        refetch();
      }
    } catch (error) {
      alert?.({ content: 'Error has occured!', status: 'error' });
    }
  };
  const handlePostComment = () => {
    handleSubmit(postComment);
  };
  useEffect(() => {
    refetch({ first: currentPage * PARAMS_DEFAULT.pageSize });
  }, [currentPage]);
  return (
    <WrapperContent title="Comments" className={`px-4 sm:px-10 pt-10 ${className}`}>
      <div className="mb-8">
        {data?.comments?.length > 0 ? (
          data?.comments?.map((comment: Comment, id: number) => (
            <CommentPost key={comment?.id ?? id} comment={comment} />
          ))
        ) : (
          <em className="text-center block font-medium">Not found any comments.</em>
        )}
        {totalPage > 1 && (
          <Button
            handleClick={() => setCurrentPage((prev) => (totalPage > currentPage ? ++prev : 1))}
            name={totalPage > currentPage ? 'More comments...' : 'Less comments...'}
            className="border border-black bg-primary text-white rounded-[20px] mt-5 py-2 px-5 text-sm font-semibold press shadow-md"
            isLoading={loading}
          />
        )}
      </div>

      <>
        <p className="text-lg font-bold font-title mb-4">Leave A Reply</p>
        <form className="flex flex-wrap">
          <Input
            type="text"
            placeholder="Comment"
            value={values?.content}
            error={errors?.content}
            name="content"
            className="w-full py-2 sm:py-3 text-[15px]"
            isMultiline={true}
            onChange={onChange}
          />
          <Input
            type="text"
            placeholder="Name"
            value={values?.name}
            error={errors?.name}
            name="name"
            className="w-full sm:w-1/2 py-2 sm:py-3 sm:pr-3 text-[15px]"
            onChange={onChange}
          />
          <Input
            type="email"
            placeholder="Email"
            value={values?.email}
            error={errors?.email}
            name="email"
            className="w-full sm:w-1/2 py-2 sm:py-3 sm:pl-3 text-[15px]"
            onChange={onChange}
          />
          <Button
            handleClick={handlePostComment}
            name="Post Comment"
            className="border border-black bg-primary text-white rounded-[30px] mt-4 py-1 sm:py-2 px-4 sm:px-8 text-base sm:text-lg font-bold press shadow-md"
            isLoading={postLoading || publishLoading || articleLoading}
            disabled={postLoading || publishLoading || articleLoading}
          />
        </form>
      </>
    </WrapperContent>
  );
};

export default React.memo(Comments);
